  emailjs.init("g8EMLxnVCNOHBerfC");
document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 


  const params = {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value
  };


  emailjs.send("service_fr3sy8j", "template_i6xe8zf", params)
    .then(function(response) {
      document.getElementById("status").innerText = "✅ Message sent successfully!";
      console.log("SUCCESS!", response.status, response.text);
            setTimeout(function() {
    location.reload(); 
  }, 2000); 
    }, function(error) {
      document.getElementById("status").innerText = "❌ Failed to send message. Try again later.";
      console.error("FAILED...", error);
    });
});