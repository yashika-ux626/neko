const catGif = document.getElementById("catGif");

const message = document.getElementById("message");

const yesButton = document.getElementById("yesButton");

const noButton = document.getElementById("noButton");

const buttonArea = document.getElementById("buttonArea");


yesButton.addEventListener("click", function () {

    catGif.src = "assets/happycat.gif";

    message.textContent = "^^ Have your meals, no cigg";

    noButton.style.display = "none";

    yesButton.style.display = "none";

    createConfetti();

});


function moveNoButton() {

    catGif.src = "assets/grumpycat.gif";

    message.textContent = "The cat does not approve!";


    const maximumX =
        buttonArea.clientWidth - noButton.offsetWidth;

    const maximumY =
        buttonArea.clientHeight - noButton.offsetHeight;


    const randomX =
        Math.random() * maximumX;

    const randomY =
        Math.random() * maximumY;


    noButton.style.left = randomX + "px";

    noButton.style.top = randomY + "px";

    noButton.style.right = "auto";

}


noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


noButton.addEventListener(
    "click",
    moveNoButton
);


noButton.addEventListener(
    "touchstart",

    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


function createConfetti() {

    const colours = [
        "#ff6699",
        "#ffd166",
        "#8bd3dd",
        "#cdb4db",
        "#95d5b2"
    ];


    for (let number = 0; number < 100; number++) {

        const confetti =
            document.createElement("div");


        confetti.classList.add("confetti");


        const randomColour =
            colours[
                Math.floor(
                    Math.random() * colours.length
                )
            ];


        confetti.style.backgroundColor =
            randomColour;


        confetti.style.left =
            Math.random() * 100 + "vw";


        confetti.style.animationDuration =
            2 + Math.random() * 3 + "s";


        document.body.appendChild(confetti);


        setTimeout(function () {

            confetti.remove();

        }, 5000);

    }

}