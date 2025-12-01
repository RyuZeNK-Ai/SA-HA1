// menu-mobile.js
// Menú hamburguesa animado y responsive con DOMContentLoaded

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".main-nav .nav-list").cloneNode(true);

  hamburger.addEventListener("click", () => {
    const abierto = mobileMenu.classList.toggle("active");
    hamburger.setAttribute("aria-expanded", abierto);
  });

  // Clona solo si el menú está vacío
  if (mobileMenu.children.length === 0) {
    const ul = document.createElement("ul");
    ul.classList.add("nav-list");
    ul.innerHTML = navLinks.innerHTML;
    mobileMenu.appendChild(ul);
  }
});
