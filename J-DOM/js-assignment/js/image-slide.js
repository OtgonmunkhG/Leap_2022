
let images = document.querySelectorAll(".image");

function removeActiveClass() {
    for(let i = 0; i < images.length; i++){
        images[i].classList.remove("active")
    }
}

for(let i = 0; i < images.length; i++){
    images[i].addEventListener('click', () => {
        removeActiveClass();
        images[i].classList.add('active');
        if(images[i].style == "width: 40vw"){
            images[i].style == "display:none"
        }
    })
}
   
