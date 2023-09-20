//dugme za vracanje na vrh strane
$(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
        $('.naPocetak').fadeIn(200);
      } else {
        $('.naPocetak').fadeOut(200);
      }
    });
    $('.naPocetak').click(function(event) {
      event.preventDefault();
      
      $('html, body').animate({scrollTop: 0}, 300);
    })
  });

// js za hamburger menu
const meni = document.getElementById("menu"); 
const lista= document.getElementById("list"); 

//klikom na hamburger menu
meni.addEventListener('click', (e) => {
  e.preventDefault();
  var x = document.getElementById("list");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
});


//prikaz slike
const i1=document.getElementById("marko");
const i2=document.getElementById("lidija");
const i3=document.getElementById("simona");

i1.addEventListener('click',(e)=>{
    if(document.getElementById("img1").style.display=="block"){
        document.getElementById("img1").style.display="none"
        document.getElementById("m1").style.display="block";
        document.getElementById("m2").style.display="block";
        document.getElementById("marko").style.backgroundColor="rgb(117, 31, 46)";
    }else{
        document.getElementById("img1").style.display="block";
        document.getElementById("m1").style.display="none";
        document.getElementById("m2").style.display="none";
        document.getElementById("marko").style.backgroundColor="rgb(207, 49, 104)";
    }
})


i2.addEventListener('click',(e)=>{
    if(document.getElementById("img2").style.display=="block"){
        document.getElementById("img2").style.display="none"
        document.getElementById("l1").style.display="block";
        document.getElementById("l2").style.display="block";
        document.getElementById("lidija").style.backgroundColor="rgb(117, 31, 46)";
    }else{
        document.getElementById("img2").style.display="block";
        document.getElementById("l1").style.display="none";
        document.getElementById("l2").style.display="none";
        document.getElementById("lidija").style.backgroundColor="rgb(207, 49, 104)";
    }
})

i3.addEventListener('click',(e)=>{
    if(document.getElementById("img3").style.display=="block"){
        document.getElementById("img3").style.display="none"
        document.getElementById("s1").style.display="block";
        document.getElementById("s2").style.display="block";
        document.getElementById("simona").style.backgroundColor="rgb(117, 31, 46)";
    }else{
        document.getElementById("img3").style.display="block";
        document.getElementById("s1").style.display="none";
        document.getElementById("s2").style.display="none";
        document.getElementById("simona").style.backgroundColor="rgb(207, 49, 104)";
    }
})



  