// Variables and typess
let btn = $('#button');

// Control Structure (if-else)
$(window).scroll(function() {
  // Operators
  if ($(window).scrollTop() > 300) {
    // Objects
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

// Control Structure (Lops)
// Example array of elements
var elements = ['Element 1', 'Element 2', 'Element 3'];

// Loops
for (let i = 0; i < elements.length; i++) {
  console.log(elements[i]);
}

// DOM (documentobjectmodel)
// Events
btn.on('click', function(e) {
  // Functions
  e.preventDefault();
  // DOM manipulation
  $('html, body').animate({scrollTop:0}, '300');
});


//Kevins Menu//

// Variables and types
const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

// Control Structure (if-else)
// Events
menu_btn.addEventListener('click', function () {
    // Control Structure (Loops)
    // Functions
    // Variable Scope (including LET)
    // Operators
    // DOM (Document Object Model)
    // Objects
    if (menu_btn.classList.contains('is-active')) {
        menu_btn.classList.remove('is-active');
        mobile_menu.classList.remove('is-active');
    } else {
        menu_btn.classList.add('is-active');
        mobile_menu.classList.add('is-active');
    }
});


