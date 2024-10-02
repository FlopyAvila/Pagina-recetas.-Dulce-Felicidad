document.addEventListener("DOMContentLoaded", () => {

    //seleccion de elementos
    const toggleButton = document.querySelector(".nav-menu-btn")
    const menuDesplegado = document.querySelector(".navbar-mobile")

    const toggleMenu = () =>{
        menuDesplegado.style.display = 
            menuDesplegado.style.display == "none" || menuDesplegado.style.display === ""
            ? "flex" 
            : "none";
    };

    const esconderMenuResize = () => {
        menuDesplegado.style.display = "none"
    };

    toggleButton.addEventListener("click", toggleMenu);
    window.addEventListener("resize", esconderMenuResize);
    window.addEventListener("load", esconderMenuResize);
});