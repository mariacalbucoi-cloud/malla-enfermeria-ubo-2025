const malla = {
  "Primer semestre": [
    { nombre: "Habilidades Académicas I" },
    { nombre: "Inglés I" },
    { nombre: "Fundamentos de Biología y Genética Humana" },
    { nombre: "Bases Químicas y Bioquímicas de la Vida" },
    { nombre: "Gestión del Cuidado en Enfermería I" },
    { nombre: "Educación en Enfermería I" }
  ],
  "Segundo semestre": [
    { nombre: "Habilidades Académicas II", prerequisitos: ["Habilidades Académicas I"] },
    { nombre: "Inglés II", prerequisitos: ["Inglés I"] },
    { nombre: "Morfología Micro y Macroscópica", prerequisitos: ["Fundamentos de Biología y Genética Humana"] },
    { nombre: "Microbiología y Agentes Infecciosos", prerequisitos: ["Bases Químicas y Bioquímicas de la Vida"] },
    { nombre: "Gestión del Cuidado en Enfermería II", prerequisitos: ["Gestión del Cuidado en Enfermería I"] },
    { nombre: "Educación en Enfermería II", prerequisitos: ["Educación en Enfermería I"] }
  ],
  // Continúa con los demás semestres igual que estos...
};

function crearMalla() {
  const contenedor = document.getElementById("malla-container");

  for (const [semestre, ramos] of Object.entries(malla)) {
    const divSemestre = document.createElement("div");
    divSemestre.className = "semestre";
    divSemestre.innerHTML = `<h2>${semestre}</h2>`;

    ramos.forEach(ramo => {
      const divRamo = document.createElement("div");
      divRamo.className = "ramo";
      divRamo.textContent = ramo.nombre;

      if (ramo.prerequisitos) {
        const pre = document.createElement("div");
        pre.className = "prerrequisitos";
        pre.textContent = "Prerrequisito(s): " + ramo.prerequisitos.join(", ");
        divRamo.appendChild(pre);

        divRamo.addEventListener("click", () => {
          pre.style.display = pre.style.display === "none" ? "block" : "none";
        });
      }

      divSemestre.appendChild(divRamo);
    });

    contenedor.appendChild(divSemestre);
  }
}

document.addEventListener("DOMContentLoaded", crearMalla);

