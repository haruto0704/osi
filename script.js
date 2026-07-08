function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    document.getElementById(pageId).style.display = "block";

    document.querySelectorAll(".sidebar a").forEach(link => {
        link.classList.remove("active");
    });

    event.target.classList.add("active");
}

// ページを開いたらホームを表示
window.onload = function(){
    showPage("home");
}

// スライドショー
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index){

    slides.forEach(slide =>{
        slide.classList.remove("active");
    });

    slides[index].classList.add("active");
}

function changeSlide(direction){

    currentSlide += direction;

    if(currentSlide >= slides.length){
        currentSlide = 0;
    }

    if(currentSlide < 0){
        currentSlide = slides.length - 1;
    }

    showSlide(currentSlide);
}

// 自動スライド
setInterval(() => {
    changeSlide(1);
}, 2000);