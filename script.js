var xml = new XMLHttpRequest();

$(".send-mail").click((e) => {
  // document.getElementById('form').submit();
  console.log("Form has been submitted !")
  e.preventDefault();
  let data = new FormData(document.getElementById("form"));
  xml.open("POST", "post_mail.php");
  xml.send(data);
})

xml.onreadystatechange = function() {
  if( xml.readyState == 4 && xml.status == 200 ){
      // Success feedback & clear form
      clearForm();
      // console.log("Email has been sent")
      alert('Email sent successfully !');
      //window.location.href = "index.html";
  }
  else if(xml.status == 404) {
      // Failure feedback
      alert('Email cannot been sent. Please retry later.')
      // console.log('Email has not been sent')
  }
  

};

$(".contact-form span").click(() => {
  var mailTo = "maxime.haurel0@gmail.com";
  var subject = document.getElementById('form-subject').value;
  var body = document.getElementById('form-message').value;
  window.open('mailto:' + mailTo + '?subject=' + subject + '&body=' + body);
});


function clearForm() {
  document.getElementById('email').value = ""
  document.getElementById('form-subject').value = ""
  document.getElementById('form-message').value = ""
}

