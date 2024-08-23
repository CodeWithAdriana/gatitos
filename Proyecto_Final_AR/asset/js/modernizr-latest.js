// Este archivo JS se encargará de la funcionalidad dinámica adicional

// Redirección a las páginas correspondientes al hacer clic en los enlaces del menú de navegación
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("nav ul li a");

  links.forEach(link => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const href = this.getAttribute("href");

      // Simulación de redirección
      window.location.href = href;
    });
  });
});
