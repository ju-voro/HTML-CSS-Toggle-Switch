console.log("test");
let images = ['img/pic1.jpg', 'img/pic2.jpg', 'img/pic3.jpg', 'img/pic4.jpg'];
let image = document.getElementById("image");

function changeImage(){
    console.log("here i am");
  
    console.log(image);
    let rnd = Math.floor((Math.random() * images.length-1) + 1);
    console.log(rnd);
    image.src = images[rnd];
}

function hideImage(){
    var checkbox = document.getElementById("toggle-switch");
    if(checkbox.checked) {
        console.log("checked");
        image.style.opacity = 0.5;
    }else {
        image.style.opacity = 1;
    }

}