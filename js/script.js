// Replace Text In Header
const checkReplace = document.querySelector('.replace-me');

if (checkReplace !== null) {
  const replace = new ReplaceMe(checkReplace, {
    animation: 'animated fadeIn',
    speed: 2000,
    separator: ',',
    loopCount: 'infinite',
    autoRun: true,
  });
}

// User Scroll For Navbar
function userScroll() {
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark');
      navbar.classList.add('border-bottom');
      navbar.classList.add('border-secondary');
      navbar.classList.add('navbar-sticky');
    } else {
      navbar.classList.remove('bg-dark');
      navbar.classList.remove('border-bottom');
      navbar.classList.remove('border-secondary');
      navbar.classList.remove('navbar-sticky');
    }
  });
}

document.addEventListener('DOMContentLoaded', userScroll);

// Send email
const senderName = document.getElementById('inputName');
const email = document.getElementById('inputEmail');
// const phone = document.getElementById('inputPhone');
const textMessage = document.getElementById('textareaMessage'); 
const submit = document.getElementsByClassName('contact-form')[0];

submit.addEventListener('submit', (event) => {

  event.preventDefault;

  try {
    
  Email.send({
    Host: "smtp.elasticemail.com",
    SecureToken : "476aba11-90b8-45b9-967d-af00ef531e2f",
    Username: "elena311979@gmail.com",
    Password: "30FA3E632C443523A3CF990C5B7ED76FFB50",
    To: 'elena311979@gmail.com', 
    From: 'elena311979@gmail.com',
    Subject: "Message From Contact Form",
    Body: `Name: ${senderName.value} <br />,
    Email: ${email.value} <br />,
    Message: ${textMessage.value}`
  }).then (
    clearAndAlertOnSubmit(),
    console.log(senderName.value, email.value, textMessage.value),
    submit.reset()
  )
  } catch (error){
    console.log(error);
    Swal.fire({
      title: 'Sorry, something went wrong!',
      text: 'Your message wasn\'t sent, possibly, due to some website maintenance. Please use other metod to communicate. Thank you for understanding.',
      icon: 'error',
      confirmButtonText: 'OK'
    })
  }
})

async function clearAndAlertOnSubmit() {
  let alertOnSubmit = new Promise(function(notify) {
    notify = Swal.fire({
      text: 'Your message was sent successfully. Thank you',
      icon: 'success',
      confirmButtonText: 'Ok'
      })}
  )
}

// Select languages
// $(function(){
//   $('.selectpicker').selectpicker();
// });

// In your Javascript (external .js resource or <script> tag)
$(document).ready(function() {
  $('.languages-picker').select2();
});


  