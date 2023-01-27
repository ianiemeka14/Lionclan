const slideshowImg = document.querySelectorAll(".container .slideshow_img");

const nextImageDelay = 3000;
let currentImageCounter = 0;

slideshowImg[currentImageCounter].style.display = "block";

setInterval(nextImage, nextImageDelay);

function nextImage(){
    slideshowImg[currentImageCounter].style.display= "none";
    currentImageCounter = (currentImageCounter + 1) % slideshowImg.length;
    slideshowImg[currentImageCounter].style.display = "block";

}