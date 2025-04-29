// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("active");
});

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".hamburger") && !e.target.closest(".nav-links")) {
    navLinks.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      // Close mobile menu after clicking a link
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    }
  });
});

// Add scroll event listener to change header style
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.background = "rgba(255, 255, 255, 0.95)";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  } else {
    header.style.background = "var(--white)";
    header.style.boxShadow = "none";
  }
});

// Form submission handling
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener los valores del formulario
    const nombre = contactForm.querySelector('[name="nombre"]').value;
    const email = contactForm.querySelector('[name="email"]').value;
    const telefono = contactForm.querySelector('[name="telefono"]').value;
    const mensaje = contactForm.querySelector('[name="mensaje"]').value;

    // Construir el cuerpo del correo
    const subject = `Nuevo mensaje de ${nombre}`;
    const body = `Nombre: ${nombre}\nEmail: ${email}\nTeléfono: ${telefono}\n\nMensaje:\n${mensaje}`;

    // Crear el enlace mailto
    const mailtoLink = `mailto:diego.gutierrez684@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    // Abrir el cliente de correo
    window.location.href = mailtoLink;

    // Mostrar mensaje de confirmación
    alert(
      "Gracias por tu mensaje. Se abrirá tu cliente de correo para enviar el mensaje."
    );

    // Limpiar el formulario
    contactForm.reset();
  });
}
