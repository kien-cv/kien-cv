document.addEventListener("DOMContentLoaded", function(event) { 
  var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function inc_fz(){
    fz = document.getElementsByClassName("resume");
    for(var i=0;i<fz.length;i++){
        fz[i].style.fontSize = "150%" ;
    }
  
}

function inc_fz1(){
    fz = document.getElementsByClassName("resume");
    for(var i=0;i<fz.length;i++){
        fz[i].style.fontSize = "100%" ;
    }
  
}

function change_color(){
  fz = document.getElementsByClassName("resume");
  for(var i=0;i<fz.length;i++){
    fz[i].style.color = "red" ;

    //Goi CSS vao JS de doi mau the Span
    var span = document.getElementsByTagName('div');
    for(let i=0;i<span.length;i++){
      span[i].classList.toggle('change');
    }
  }
}

function normal_color(){
  fz = document.getElementsByClassName("resume");
  for(var i=0;i<fz.length;i++){
    fz[i].style.color = "black" ;
  }
}
});
