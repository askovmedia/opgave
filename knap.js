// Variables and types
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

// Control Structure (Loops)
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
