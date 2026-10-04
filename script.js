function showMessage() {
    alert("المشروع ده لسه تحت التطوير 🚀");
}


function contactMe() {
    alert("أهلاً بيك ❤️ ابعتلي لما نضيف بيانات التواصل.");
}


function toggleMenu() {

    const menu = document.querySelector(".nav-links");

    if (menu.style.display === "flex") {
        menu.style.display = "none";
    } else {
        menu.style.display = "flex";
        menu.style.flexDirection = "column";
        menu.style.position = "absolute";
        menu.style.top = "75px";
        menu.style.right = "20px";
        menu.style.background = "#0b1120";
        menu.style.padding = "20px";
        menu.style.borderRadius = "10px";
    }

}function dance() {

    const dancer = document.querySelector(".dancer");

    dancer.classList.add("dance-now");

    setTimeout(function () {
        dancer.classList.remove("dance-now");
    }, 2000);

}// LOADING

window.addEventListener("load", function () {

    setTimeout(function () {

        document.getElementById("loader")
            .classList.add("loader-hidden");

        setTimeout(function () {

            document.getElementById("welcomePopup")
                .classList.add("show");

        }, 700);

    }, 1200);

});


// CLOSE WELCOME

function closeWelcome() {

    document.getElementById("welcomePopup")
        .classList.remove("show");

}