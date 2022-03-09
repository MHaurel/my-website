window.onscroll = function() {updateOnScroll()};


var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

var profileDiv = document.getElementById("index");
var educationDiv = document.getElementById("education");
var projectsDiv = document.getElementById("projects");
var contactDiv = document.getElementById("contact");

$("#navbar > a").click(updateOnScroll());

updateOnScroll();

function updateOnScroll() {
  var y = window.pageYOffset;
  if (y >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }

  if (y >= profileDiv.offsetTop && y < (educationDiv.offsetTop + 10)) {
    clearHighlightNavbar();
    // Highlight profile navbar button
    navbar.children[0].classList.add("highlighted");
  } 

  if (y >= (educationDiv.offsetTop - 10) && y < (projectsDiv.offsetTop + 10)) {
    clearHighlightNavbar();
    // Highlight education navbar button
    navbar.children[1].classList.add("highlighted");
  } 

  if (y >= (projectsDiv.offsetTop - 10) && y < contactDiv.offsetTop) {
    clearHighlightNavbar();
    // Highlight projects navbar button
    navbar.children[2].classList.add("highlighted");
  } 

  if (y >= contactDiv.offsetTop) {
    clearHighlightNavbar();
    // Highlight contact navbar button
    navbar.children[3].classList.add("highlighted");
  }

  // Check if user has reached the bottom of the page
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    clearHighlightNavbar();
    // Highlight contact navbar button
    navbar.children[3].classList.add("highlighted");
  }
}

function clearHighlightNavbar() {
  for (var i = 0; i < navbar.children.length; i++) {
    navbar.children[i].classList.remove("highlighted");
  }
}