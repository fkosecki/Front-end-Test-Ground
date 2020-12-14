const modalWrap = document.querySelector("section.modal-wrap");
modalWrap.classList.toggle("active");
const continueBtn = document.querySelector("span.continueButton")
const soundBtn = document.querySelector("span.soundButton")
let playSound = true;

const headerText = document.querySelector(".headerText"),
    crackedImg1 = document.querySelector("img.hImg2"),
    img1 = document.querySelector("img.hImg1"),
    crackedImg2 = document.querySelector("img.hImg4"),
    img2 = document.querySelector("img.hImg3"),
    crackedImg3 = document.querySelector("img.hImg6"),
    img3 = document.querySelector("img.hImg5"),

    glassBrakeSound = document.getElementById('glassBrake'),

    soundMenuBtn = document.querySelector(".buttons .fa-volume-off"),
    redoMenuBtn = document.querySelector(".buttons .fa-redo");

crackedImg1.addEventListener('animationend', function () {
    if (playSound) {
        glassBrakeSound.play();
    }
});

continueBtn.addEventListener('click', function () {
    toggleModal();
});

soundBtn.addEventListener('click', function () {
    if (playSound) {
        playSound = false;
        soundBtn.classList.toggle("disabled");
        soundMenuBtn.classList.toggle("disabled");
    } else {
        playSound = true;
        soundBtn.classList.toggle("disabled");
        soundMenuBtn.classList.toggle("disabled");
    }
});

soundMenuBtn.addEventListener('click', function () {
    if (playSound) {
        playSound = false;
        soundBtn.classList.toggle("disabled");
        soundMenuBtn.classList.toggle("disabled");
    } else {
        playSound = true;
        soundBtn.classList.toggle("disabled");
        soundMenuBtn.classList.toggle("disabled");
    }
});

redoMenuBtn.addEventListener('click', function () {
    redoAnimation();
});

function toggleModal() {
    if (modalWrap.classList.contains("active")) {
        modalWrap.classList.toggle("hide");
        toggleAnimation();
    }
}


function toggleAnimation() {
    img1.classList.toggle("hImg1animation");
    crackedImg1.classList.toggle("hImg2animation");
    img2.classList.toggle("hImg3animation");
    crackedImg2.classList.toggle("hImg4animation");
    img3.classList.toggle("hImg5animation");
    crackedImg3.classList.toggle("hImg6animation");
    headerText.classList.toggle("hTextanimation");
}

function redoAnimation() {
    img1.classList.remove("hImg1animation");
    crackedImg1.classList.remove("hImg2animation");
    img2.classList.remove("hImg3animation");
    crackedImg2.classList.remove("hImg4animation");
    img3.classList.remove("hImg5animation");
    crackedImg3.classList.remove("hImg6animation");
    headerText.classList.remove("hTextanimation");
    window.requestAnimationFrame(function () {
        img1.classList.add("hImg1animation");
        crackedImg1.classList.add("hImg2animation");
        img2.classList.add("hImg3animation");
        crackedImg2.classList.add("hImg4animation");
        img3.classList.add("hImg5animation");
        crackedImg3.classList.add("hImg6animation");
        headerText.classList.add("hTextanimation");
    });

}