// When the user scrolls the page, execute myFunction 
//window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var contactbar = document.getElementById("contactbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    console.log(window.pageYOffset + ':' + sticky)

  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    contactbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    contactbar.classList.remove("sticky");
  }
}