
// This will allow toggle of nav Burger
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');

menu.onclick = () => {
    menu.classList.toggle('fa-x');
    navbar.classList.toggle('open');
}



// lightbox toggle

// $(document).on("click", '[data-toggle="lightbox"]', function(event) {
//     event.preventDefault();
//     $(this).ekkoLightbox();
//   });

// Dark Mode Detect

const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches;

