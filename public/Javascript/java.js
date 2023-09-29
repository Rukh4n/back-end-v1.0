const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY >0);
})

let menu = document.querySelector('#menu-icon');
let navmenu = document.querySelector('.navmenu');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
}

// Select all heart icons
const heartIcons = document.querySelectorAll('.heart-icon i');

// Add a click event listener to each heart icon
heartIcons.forEach(heartIcon => {
    heartIcon.addEventListener('click', function() {
        const isFavorite = this.getAttribute('data-favorite') === 'true';

        // Toggle the favorite state
        if (isFavorite) {
            this.setAttribute('data-favorite', 'false');
            this.classList.remove('fas'); // Remove filled heart
            this.classList.add('far');    // Add empty heart
        } else {
            this.setAttribute('data-favorite', 'true');
            this.classList.remove('far');    // Remove empty heart
            this.classList.add('fas');       // Add filled heart
        }
    });
});

// DOM Manipulation
const section = document.getElementById('trending');

window.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY;

  // Change the background color of the section to pink when scrolling
  if (scrollPosition > 0) {
    section.style.backgroundColor = '#F0E2E1';
  } else {
    section.style.backgroundColor = 'white';
  }
});
  
  
  
  