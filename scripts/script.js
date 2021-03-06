// Get all "navbar-burger" elements
var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

// Check if there are any navbar burgers
if ($navbarBurgers.length > 0) {

  // Add a click event on each of them
  $navbarBurgers.forEach(function ($el) {
    $el.addEventListener('click', function () {

      // Get the target from the "data-target" attribute
      var target = $el.dataset.target;
      var $target = document.getElementById(target);

      // Toggle the class on both the "navbar-burger" and the "navbar-menu"
      $el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });
}

// jquery smooth scroll effect
// Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    console.log($(hash).offset().top);
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});


// navbar changing color on the bottom part
// and adding transition
window.addEventListener('scroll', ()=>{
  const contactHeight = document.getElementById('contact').offsetTop;  
  const windowYOffset = window.pageYOffset;
  const navbar = document.getElementById('main-navigation');
  if(windowYOffset > 100){
    navbar.classList.add('navbar-scroll')
  } else {
    navbar.classList.remove('navbar-scroll')

  }
  if(windowYOffset > contactHeight -50 ){
    if(!navbar.classList.contains('lower-nav')){
      navbar.classList.add('lower-nav');
      const items = document.getElementsByClassName('navbar-item');
      Array.from(items).forEach(item =>{
        item.classList.add('lower-nav-items')});
    }
  } else {
    if(navbar.classList.contains('lower-nav')){
      navbar.classList.remove('lower-nav');
      const items = document.getElementsByClassName('navbar-item');
      Array.from(items).forEach(item =>{
      item.classList.remove('lower-nav-items');
    })
  }
  }
});


// adding click event to the arrow to scroll the user 50px down
$("#arrow").on('click', function(event) {
  const contactHeight = document.getElementById('intro').offsetTop;
  if(window.pageYOffset < contactHeight+1){
    event.preventDefault();
    const FACTOR = $(window).width() > 900 ? 0.15 : 0.23;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({

      scrollTop: $(window).height()*FACTOR
    }, 300)
  }
  });

  // click event for the burger-menu
const mainNav = document.getElementById('main-navigation'); 
const burgerMenu = document.getElementById('burger-menu');
const burgerButton = document.getElementById('burger-button');

burgerButton.addEventListener('click', ()=> {
    //need to fix the disabled scroll action
    // document.body.classList.toggle('noScroll');
    burgerMenu.classList.toggle('visibale');
    mainNav.classList.toggle('color-match');

})

burgerMenu.addEventListener('click', (event) => {
  if(event.target.classList.contains('burger-menu-item')){
    //need to fix the disabled scroll action before toggling this class
      // document.body.classList.toggle('noScroll');
      burgerMenu.classList.toggle('visibale');
      mainNav.classList.toggle('color-match');
      burgerButton.classList.remove('is-active');
  }
})
