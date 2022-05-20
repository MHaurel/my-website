$(".button-send-mail").click(() => {
  alert("This functionality is currently not working. Please send me a mail on the link below.")
})

<<<<<<< HEAD

var xml = new XMLHttpRequest();
xml.onreadystatechange = function() {
  if( xml.readyState==4 && xml.status==200 ){
      // Success feedback & clear form
      //clearForm();
      alert('Email sent successfully !');
      //window.location.href = "index.html";
  }
  else if(xml.status==404){
      // Failure feedback
      //alert('Email cannot been sent. Please retry later.') It show when xml request is pending
  }

};
=======
// https://www.emailjs.com/
>>>>>>> parent of 06a01e4 (Merge branch 'v1')

$(".other-contact > span").click(() => {
  var mailTo = "maxime.haurel0@gmail.com";
  var subject = document.getElementById('form-subject').value;
  var body = document.getElementById('form-message').value;
  window.open('mailto:' + mailTo + '?subject=' + subject + '&body=' + body);
});

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

  if (y >= (projectsDiv.offsetTop - 100) && y < contactDiv.offsetTop) {
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
<<<<<<< HEAD
}

function clearForm() {
  document.getElementById('email').value = ""
  document.getElementById('form-subject').value = ""
  document.getElementById('form-message').value = ""
=======
>>>>>>> parent of 06a01e4 (Merge branch 'v1')
}