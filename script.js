document.addEventListener("DOMContentLoaded", () => {
  const ramos = document.querySelectorAll(".ramo");

  ramos.forEach(ramo => {
    const nombre = ramo.dataset.nombre;
    const prerrequisitos = ramo.dataset.prerrequisitos?.split(",") || [];
    const estado = localStorage.getItem(nombre);

    if (estado === "true") {
      ramo.classList.add("desbloqueado");
      ramo.textContent = nombre + " ✅";
    } else {
      const cumplidos = prerrequisitos.every(pr => localStorage.getItem(pr.trim()) === "true");
      if (cumplidos || prerrequisitos.length === 0) {
        ramo.classList.add("desbloqueado");
        ramo.textContent = nombre;
      } else {
        ramo.classList.add("bloqueado");
        ramo.textContent = nombre + " 🔒";
      }
    }

    ramo.addEventListener("click", () => {
      if (ramo.classList.contains("bloqueado")) return;

      const desbloqueado = ramo.classList.toggle("desbloqueado");
      if (desbloqueado) {
        ramo.classList.remove("bloqueado");
        localStorage.setItem(nombre, "true");
        ramo.textContent = nombre + " ✅";
      } else {
        localStorage.removeItem(nombre);
        ramo.textContent = nombre;
      }

      location.reload();
    });
  });
});
