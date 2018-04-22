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
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function(){
  
      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});


// navbar changing color on the bottom part
window.addEventListener('scroll', ()=>{
  const contactHeight = document.getElementById('contact').offsetTop;  
  if(window.pageYOffset > contactHeight -50 ){
    const navbar = document.getElementById('main-navigation');
    if(!navbar.classList.contains('lower-nav')){
      navbar.classList.add('lower-nav');
      const items = document.getElementsByClassName('navbar-item');
      Array.from(items).forEach(item =>{
        item.classList.add('lower-nav-items')});
    }
  } else {
    const navbar = document.getElementById('main-navigation');
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
    event.preventDefault();
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(window).height()*0.15
    }, 300)
  });