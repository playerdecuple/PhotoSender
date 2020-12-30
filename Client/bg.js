const body = document.querySelector("body");

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `images/${imgNumber}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom() {
    return Math.floor((Math.random() * 5) + 1)
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();