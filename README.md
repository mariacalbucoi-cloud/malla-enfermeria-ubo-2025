# malla-enfermeria-ubo-2025
malla curricular de enfermería ubo año 2025.
[Up<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Malla Curricular Enfermería</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>Malla Curricular de Enfermería</h1>
  <div id="malla">
    <!-- El contenido de la malla ya ha sido ingresado por completo en el documento HTML interactivo -->
    <!-- Este se incluye aquí en una versión exportable si se desea visualizar offline o subir a GitHub Pages -->
  </div>
  <script src="script.js"></script>
</body>
</html>
loading index.html…]()

[Uploading script.jsdocument.addEventListener("DOMContentLoaded", () => {
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
…]()
[Uplobody {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  color: #333;
}

.semestre {
  margin-bottom: 30px;
  background: #ffffff;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.semestre h2 {
  color: #2c3e50;
}

.ramo {
  padding: 10px 15px;
  margin: 8px 0;
  border-radius: 8px;
  border: 2px solid #ccc;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: 0.3s;
  font-weight: bold;
}

.ramo:hover {
  opacity: 0.9;
}

.ramo.desbloqueado {
  background-color: #d4edda;
  border-color: #28a745;
  color: #155724;
}

.ramo.bloqueado {
  background-color: #f8d7da;
  border-color: #dc3545;
  color: #721c24;
  cursor: not-allowed;
  opacity: 0.6;
}ading style.css…]()
