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


//forma
const forma = document.getElementById('forma');
const ime = document.getElementById('name');
const email = document.getElementById('email');
const polje = document.getElementById('polje');
const submit = document.getElementById('submit');
const ples= document.getElementById('ples');


ime.addEventListener('blur',()=> {
  console.log(ime.value);
 if(ime.value == ""){
    ime.classList.toggle('error');
    
  }else {
   ime.classList.toggle('success');
  }
});

email.addEventListener('blur',()=> {
  console.log(email.value);
 if(email.value == "" || !(email.value.includes('@'))){
    email.classList.toggle('error');
   
  }else{
   email.classList.toggle('success');
  }
})

ples.addEventListener('blur',()=>{
  console.log(ples.value);
})

number.addEventListener('blur',()=> {
  console.log(number.value);
  console.log(number.value.length);
  if(number.value == "" || number.value.length > 10){
     number.classList.toggle('error');
 
   }else{
    number.classList.toggle('success');
   }
});

polje.addEventListener('blur', ()=> {
  console.log(polje.value);
  if(polje.value == ""){
    polje.classList.toggle('error');

  }else{
    polje.classList.toggle('success');
  }
}) 


 submit.addEventListener('click',(e)=>{

 if(ime.classList.contains('success') && email.classList.contains('success') && number.classList.contains('success') && polje.classList.contains('success')){
     
     window.confirm(`Hvala Vam! Poruka je uspešno poslata! \nIme i prezime: ${ime.value} \nEmail: ${email.value} \nBroj telefona: ${number.value} \nVrsta plesa: ${ples.value} \nPoruka: ${polje.value}` );
   }else{
     e.preventDefault();
     window.alert('Podaci nisu dobro uneti! Pokušajte ponovo');
   }
});

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
