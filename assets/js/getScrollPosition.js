window.onload = function () {
    const planet = document.getElementById("planet")
}

window.addEventListener("scroll", function(event) {
    var top = this.scrollY;
    console.log(top);

    if (top > 500) {
        planet.style.opacity = "0.5"
    } else {
        planet.style.opacity = "1"
    }
}, false);