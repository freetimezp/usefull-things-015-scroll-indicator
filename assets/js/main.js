window.addEventListener("scroll", function () {
    let wintop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight;
    let winHeight = window.innerHeight;

    let scrolled = (wintop / (docHeight - winHeight)) * 100;

    document.querySelector(".scroll-line").style.width = scrolled + "%";
});