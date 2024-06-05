let menu= document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let themeToggler = document.querySelector('.theme-toggler');
let toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.onclick = () =>{
  themeToggler.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
    themeToggler.classList.remove('active');
}

document.querySelectorAll('.theme-toggler .theme-btn').forEach(btn =>{

  btn.onclick = () =>{
    let color = btn.style.background;
    document.querySelector(':root').style.setProperty('--main-color', color);
  }
});

var swiper = new Swiper(".home-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
  loop: true,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  }
  });


var swiper = new Swiper(".review-slider", {
  slidesPerView:1, 
    grabCursor: true,
     loop: true,
     spaceBetween: 10,
     breakpoints:{
      0:{
        slidesPerView:1,
      },
      700:{
        slidesPerView:2,
      },
      1050:{
        slidesPerView:3,
      },
    },
    autoplay:{
    delay:5000,
    disableOnInteraction: false,
  }
  });

  //Pabbly Data//
  
   // Check if there's already stored ticket information in localStorage
   let ticketsSold = localStorage.getItem('ticketsSold') || 0;
   let ticketsLeft = localStorage.getItem('ticketsLeft') || 81;

   // Update the initial values
   document.getElementById('ticketsSold').textContent = ticketsSold;
   document.getElementById('ticketsLeft').textContent = ticketsLeft;

   function sellTicket() {
       if (ticketsLeft > 0) {
           // Increment ticketsSold and decrement ticketsLeft
           ticketsSold++;
           ticketsLeft--;

           // Update the displayed values
           document.getElementById('ticketsSold').textContent = ticketsSold;
           document.getElementById('ticketsLeft').textContent = ticketsLeft;

           // Save the updated values to localStorage
           localStorage.setItem('ticketsSold', ticketsSold);
           localStorage.setItem('ticketsLeft', ticketsLeft);
       } else {
           // No more tickets left, show an alert
           alert('Sorry, no more tickets available!');
       }
   }