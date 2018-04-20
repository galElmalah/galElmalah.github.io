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

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
// changing the navbar color on scroll
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
})