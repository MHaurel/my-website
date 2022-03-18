document.getElementById("form").addEventListener("submit", function(e){
  console.log("Form submit")
  e.preventDefault();
  let data = new FormData(document.getElementById("form"));
  xml.open("POST", "post_mail.php");
  xml.send(data);
})


var xml = new XMLHttpRequest();
xml.onreadystatechange = function() {
  var message = "";
  // var divMsg = document.getElementById("divMsgForm");
  if( xml.readyState==4 && xml.status==200 ){
      // message = "Votre message a bien été envoyé";
      // for (let i = 0; i < document.getElementsByClassName("formElt").length; i++) {
      //     document.getElementsByClassName("formElt")[i].value = "";
      //     divMsg.style.backgroundColor = "#22C737";
      //     divMsg.style.padding = "25px";
      //     divMsg.style.marginBottom = "15px";
      // }
      console.log("Votre message a bien été envoyé")
  }
  else if(xml.status!=200){
      // message = "Erreur, veuillez réessayer"
      // divMsg.style.backgroundColor = "#ff0033";
      // divMsg.style.padding = "25px";
      // divMsg.style.marginBottom = "15px";
      console.log("Erreur, veuillez rééssayer")
  }
  
  // divMsg.innerText = message;
  // fadeOutEffect();

};

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
}