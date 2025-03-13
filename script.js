function scrollToSkills() {
    const skillsSection = document.getElementById("sobre-mi");
    window.scrollTo({
        top: skillsSection.offsetTop,
        behavior: "smooth"
    });
}

window.onload = function () {
    window.scrollTo(0, 0);
}

const botonModoOscuro = document.getElementById("modo-oscuro");

if (localStorage.getItem("modoOscuro") === "true") {
    document.body.classList.add("modo-oscuro");
    botonModoOscuro.textContent = "🌞 Modo Claro";
}

botonModoOscuro.addEventListener("click", function () {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModoOscuro.textContent = "🌞 Modo Claro";
        localStorage.setItem("modoOscuro", "true");
    } else {
        botonModoOscuro.textContent = "🌙 Modo Oscuro";
        localStorage.setItem("modoOscuro", "false");
    }
});