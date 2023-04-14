// SIDENAV
let ham_menu = document.querySelector("#ham-menu>span");
let resume_btn = document.querySelectorAll(".resume");

function openNav() {
    if (ham_menu.innerText == "menu") {
        ham_menu.innerText = "close";
        document.getElementById("mySidenav").style.width = "100%";

    }
    else {
        document.getElementById("mySidenav").style.width = "0";
        ham_menu.innerText = "menu";
    }
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    ham_menu.innerText = "menu";
}

const downloadResume = () => {
    window.open("./assets/Nihar_Ranjan_Patra_Resume.pdf",'_blank');
}