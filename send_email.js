function sendMail() {
    var params = {
      name: document.getElementById("firstName").value,
      email: document.getElementById("email").value,
      message: document.getElementById("comments").value,
    };
  
    const serviceID = "service_4bmcu6a";
    const templateID = "template_r3i7y9g";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  