let menuicon = document.getElementById("iconmenu");
let menubars = document.getElementById("barmenu");

menuicon.addEventListener("click", () => {
    menubars.classList.toggle("open");

    if (menubars.classList.contains("open")) {
        menuicon.classList.remove("bx-menu");
        menuicon.classList.add("bx-x");
    }
    else {
        menuicon.classList.add("bx-x");
        menuicon.classList.remove("bx-menu");
    }


})















