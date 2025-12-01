// Contenido de form-validation.js
// Validación de formulario en tiempo real con toast
const form = document.querySelector("form");
const campos = form.querySelectorAll("input, textarea");

const mostrarError = (campo, mensaje) => {
  const spanError = campo.parentElement.querySelector(".error-msg");
  campo.classList.add("error");
  spanError.textContent = mensaje;
};

const limpiarError = campo => {
  const spanError = campo.parentElement.querySelector(".error-msg");
  campo.classList.remove("error");
  spanError.textContent = "";
};

campos.forEach(campo => {
  campo.addEventListener("input", () => {
    if (!campo.validity.valid) {
      mostrarError(campo, "Campo requerido o formato inválido");
    } else {
      limpiarError(campo);
    }
  });
});

form.addEventListener("submit", e => {
  e.preventDefault();

  let esValido = true;

  campos.forEach(campo => {
    if (!campo.validity.valid) {
      mostrarError(campo, "Campo requerido o formato inválido");
      esValido = false;
    }
  });

  if (esValido) {
    form.reset();
    mostrarToast("Mensaje enviado con éxito.");
  }
});

const mostrarToast = mensaje => {
  let toast = document.querySelector(".toast");

  if (!toast) {
    toast = document.createElement("div");
    toast.className = "toast";
    document.body.appendChild(toast);
  }

  toast.textContent = mensaje;
  toast.classList.add("visible");

  setTimeout(() => {
    toast.classList.remove("visible");
  }, 4000);
};
