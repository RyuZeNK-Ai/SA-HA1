// Contenido de main.js
// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// Botón volver arriba
const btnVolverArriba = document.createElement("button");
btnVolverArriba.className = "btn-volver-arriba";
btnVolverArriba.innerHTML = '<i class="fas fa-chevron-up"></i>';
btnVolverArriba.setAttribute("aria-label", "Volver arriba");
document.body.appendChild(btnVolverArriba);

btnVolverArriba.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

window.addEventListener("scroll", () => {
  btnVolverArriba.style.display = window.scrollY > 300 ? "block" : "none";
});

// Intersection Observer
const fadeInTargets = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

fadeInTargets.forEach(el => observer.observe(el));

// Modal productos (sólo estructura, contenido se adapta al diseño)
const modales = {
  modal1: "Espacios anónimos de contención",
  modal2: "Recursos de autocuidado",
  modal3: "Foros moderados",
  modal4: "Derivación responsable",
  modal5: "Mapa de centros reales",
  modal6: "Comunidad de apoyo",
};

document.querySelectorAll(".card-servicio").forEach(card => {
  card.addEventListener("click", () => {
    const modalKey = card.dataset.modal;
    const modal = document.createElement("div");
    modal.className = "modal-overlay";
    modal.innerHTML = `
      <div class="modal-card">
        <button class="modal-close" aria-label="Cerrar modal">&times;</button>
        <h2>${modales[modalKey]}</h2>
        <p>Descripción detallada del servicio “${modales[modalKey]}”. Personaliza aquí según sea necesario.</p>
      </div>
    `;
    document.body.appendChild(modal);

    modal.querySelector(".modal-close").addEventListener("click", () => modal.remove());
    modal.addEventListener("click", e => {
      if (e.target === modal) modal.remove();
    });
  });
});

// Carrusel de testimonios
let index = 0;
const testimonios = document.querySelectorAll(".testimonio");

function mostrarTestimonio(i) {
  testimonios.forEach(t => t.classList.remove("activo"));
  testimonios[i].classList.add("activo");
}

function avanzarTestimonio() {
  index = (index + 1) % testimonios.length;
  mostrarTestimonio(index);
}

setInterval(avanzarTestimonio, 5000);
mostrarTestimonio(index);
