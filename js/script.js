let mySlider=[
    'photo/photo.jpg',
    'photo/photo1.jpg',
    'photo/photo2.jpg',
    'photo/photo3.jpg',
];

let img = document.querySelector("#slider img");
img.src = mySlider[0]
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");

let currentSlide = 0;

next.onclick = function (){
    currentSlide++;
    if(currentSlide >= mySlider.length) {
        currentSlide = 0
    }

    img.src = mySlider [currentSlide];
}

prev.onclick = function (){
    currentSlide--;
    if(currentSlide == -1) {
        currentSlide = mySlider.length - 1;
    }

    img.src = mySlider [currentSlide];
}

