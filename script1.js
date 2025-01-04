//nav bar menu opne
document.addEventListener("DOMContentLoaded", function () {
let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.active');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

  //close the navbar
  function closeNavbar() {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
  }

  // Add event listener to document to detect clicks outside the navbar
  document.addEventListener('click', function (event) {
    // Check if click is outside 
    if (!navlist.contains(event.target) && !menu.contains(event.target)) {
      closeNavbar();
    }
  });

  // event listeners to all navbar links to close when a link is clicked
  let navLinks = navlist.querySelectorAll('li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      closeNavbar();
    });
  });
});










// This code ensures that only one section is visible at a time, depending on the user's choice.

function openPage(pageId) {
    // Get all elements with class="page"
    var pages = document.getElementsByClassName('page');
    
    // Loop through the elements and hide them
    for (var i = 0; i < pages.length; i++) {
        pages[i].style.display = 'none';
    }
    
    // Show the specific page that was clicked
    document.getElementById(pageId).style.display = 'block';
}




