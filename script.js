// script.js
const asignaturas = {
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
  "Tercer semestre": [
    { nombre: "Ética y Ciudadanía" },
    { nombre: "Inglés III", prerequisitos: ["Inglés II"] },
    { nombre: "Fisiología y Fisiopatología de Sistemas I", prerequisitos: ["Morfología Micro y Macroscópica"] },
    { nombre: "Gestión del Cuidado en Enfermería III", prerequisitos: ["Gestión del Cuidado en Enfermería II"] },
    { nombre: "Enfermería en Salud Pública y Determinantes Sociales en Salud", prerequisitos: ["Educación en Enfermería II"] },
    { nombre: "Socio Antropología en Humanización del Cuidado" },
    { nombre: "Práctica Integrada en Enfermería I", prerequisitos: ["Gestión del Cuidado en Enfermería II"] }
  ],
  "Cuarto semestre": [
    { nombre: "Responsabilidad Social Universitaria", prerequisitos: ["Ética y Ciudadanía"] },
    { nombre: "Inglés IV", prerequisitos: ["Inglés III"] },
    { nombre: "Fisiología y Fisiopatología de Sistemas II", prerequisitos: ["Fisiología y Fisiopatología de Sistemas I"] },
    { nombre: "Farmacología Clínica Fundamental", prerequisitos: ["Microbiología y Agentes Infecciosos"] },
    { nombre: "Gestión en Servicios de Salud", prerequisitos: ["Gestión del Cuidado en Enfermería III"] },
    { nombre: "Matemáticas, TICs e Informática" },
    { nombre: "Práctica Integrada en Enfermería II", prerequisitos: ["Gestión del Cuidado en Enfermería III", "Práctica Integrada en Enfermería I"] }
  ],
  "Quinto semestre": [
    { nombre: "Gestión del Cuidado en Comunidades I", prerequisitos: ["Enfermería en Salud Pública y Determinantes Sociales en Salud"] },
    { nombre: "Gestión del Cuidado en el Adulto I", prerequisitos: ["Gestión del Cuidado en Enfermería III"] },
    { nombre: "Metodología de la Investigación y Bioética", prerequisitos: ["Matemáticas, TICs e Informática"] },
    { nombre: "Gestión del Cuidado en la Persona Mayor", prerequisitos: ["Gestión del Cuidado en Enfermería III", "Farmacología Clínica Fundamental", "Fisiología y Fisiopatología de Sistemas II"] },
    { nombre: "Calidad y Gestión en el Cuidado", prerequisitos: ["Gestión en Servicios de Salud"] },
    { nombre: "Práctica Integrada en Enfermería III", prerequisitos: ["Farmacología Clínica Fundamental", "Fisiología y Fisiopatología de Sistemas II", "Práctica Integrada en Enfermería II"] }
  ],
  "Sexto semestre": [
    { nombre: "Proyecto de Investigación I", prerequisitos: ["Metodología de la Investigación y Bioética"] },
    { nombre: "Gestión del Cuidado en Comunidades II", prerequisitos: ["Gestión del Cuidado en Comunidades I"] },
    { nombre: "Gestión del Cuidado en el Adulto II", prerequisitos: ["Gestión del Cuidado en el Adulto I"] },
    { nombre: "Gestión del Cuidado en la Mujer", prerequisitos: ["Farmacología Clínica Fundamental", "Fisiología y Fisiopatología de Sistemas II"] },
    { nombre: "Electivo Formación General I" },
    { nombre: "Práctica Integrada en Enfermería IV", prerequisitos: ["Gestión del Cuidado en Comunidades I"] }
  ],
  "Séptimo semestre": [
    { nombre: "Proyecto de Investigación II", prerequisitos: ["Metodología de la Investigación y Bioética"] },
    { nombre: "Gestión del Cuidado en Comunidades III", prerequisitos: ["Gestión del Cuidado en Comunidades II"] },
    { nombre: "Gestión del Cuidado en Urgencias", prerequisitos: ["Gestión del Cuidado en el Adulto II"] },
    { nombre: "Gestión del Cuidado en Niño y Adolescente I", prerequisitos: ["Gestión del Cuidado en la Mujer"] },
    { nombre: "Gestión del Cuidado en Salud Mental I", prerequisitos: ["Gestión del Cuidado en el Adulto II"] },
    { nombre: "Práctica Integrada en Enfermería V", prerequisitos: ["Gestión del Cuidado en la Mujer"] }
  ],
  "Octavo semestre": [
    { nombre: "Gestión del Cuidado en Niño y Adolescente II", prerequisitos: ["Gestión del Cuidado en Niño y Adolescente I"] },
    { nombre: "Gestión del Cuidado en Salud Mental II", prerequisitos: ["Gestión del Cuidado en Salud Mental I"] },
    { nombre: "Cuidados de la Salud e Interculturalidad", prerequisitos: ["Gestión del Cuidado en Comunidades III"] },
    { nombre: "Electivo Formación General II" },
    { nombre: "Práctica Integrada en Enfermería VI", prerequisitos: ["Gestión del Cuidado en Urgencias"] }
  ],
  "Noveno semestre": [
    { nombre: "Práctica Profesional de Enfermería I", prerequisitos: ["Práctica Integrada en Enfermería VI"] }
  ],
  "Décimo semestre": [
    { nombre: "Electivo de Profundización", prerequisitos: ["Práctica Integrada en Enfermería VI"] },
    { nombre: "Práctica Profesional en Enfermería II", prerequisitos: ["Práctica Integrada en Enfermería VI"] }
  ]
};

const container = document.getElementById("asignaturas");

const estadoRamos = {}; // Guarda el estado de cada ramo

function crearInterfaz() {
  for (const semestre in asignaturas) {
    const semestreDiv = document.createElement("div");
    semestreDiv.className = "semestre";

    const titulo = document.createElement("h2");
    titulo.textContent = semestre;
    semestreDiv.appendChild(titulo);

    asignaturas[semestre].forEach(ramo => {
      const boton = document.createElement("button");
      boton.textContent = ramo.nombre;
      boton.className = "ramo";
      boton.dataset.nombre = ramo.nombre;
      boton.dataset.semestre = semestre;

      boton.addEventListener("click", () => {
        if (estadoRamos[ramo.nombre]) {
          estadoRamos[ramo.nombre] = false;
          boton.classList.remove("activo");
        } else {
          if (ramo.prerequisitos?.every(pr => estadoRamos[pr])) {
            estadoRamos[ramo.nombre] = true;
            boton.classList.add("activo");
          } else {
            alert("Debes cumplir todos los prerrequisitos antes de seleccionar este ramo.");
          }
        }
      });

      semestreDiv.appendChild(boton);
    });

    container.appendChild(semestreDiv);
  }
}

crearInterfaz();
