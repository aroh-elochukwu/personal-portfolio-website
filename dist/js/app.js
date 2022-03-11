document.getElementById('contact-page-button').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  let name = document.getElementById('user-name').value;
  let email = document.getElementById('user-email').value;
  let subject = document.getElementById('user-subject').value;
  let message = document.getElementById('user-message').value;
  
  sendEmail(name, email, subject, message);
}

function sendEmail(name, email, subject, message) {
  email.send({
    Host: 'smtp.gmail.com',
    Username: 'elochukwuaroh@gmail.com',
    Password: 'cmymzcptfseriezi',
    To: 'elochukwuaroh2@gmail.com',
    From: 'elochukwuaroh@gmail.com',
    Subject: `${email} sent you a message about ${subject}`,
    Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,

  }).then ((message) => alert("mail sent successfully"))

}