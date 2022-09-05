let images = document.querySelectorAll("img")
let result = document.querySelector(".clickedImg")
let altText = document.querySelector(".altText")
images.forEach(image => {
    image.addEventListener("click", function(){
        result.setAttribute("src", image.getAttribute("src"))
        result.setAttribute("alt", image.getAttribute("alt"))
        altText.innerHTML = image.getAttribute("alt")
    }, false)
});