// var form = document.getElementById("form");
var btn = document.getElementById("btnSend");



let val = () => {
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var subject = document.getElementById("subject");
    var message = document.getElementById("message");
    
    if (name.value == "") {
        alert("please enter your name")
        document.form1.username.focus();
        return false;
    }
    if (email.value == "") {
        alert("please enter your email");
        document.form1.username.focus();
        return false;
    }
    if (subject.value == "") {
        alert("please enter subject");
        document.form1.username.focus();
        return false;
    }
    if (message.value == "") {
        alert("please enter your message");
        document.form1.username.focus();
        return false;
    }
    return true;
    
}

const form = document.getElementById('form');
const result = document.getElementById('result');
console.log(result)

btn.addEventListener("click",(e)=>{
    e.preventDefault();
    const arg = val();
    if(arg){

        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
       result.innerText = "Please wait..."
      
          fetch('https://api.web3forms.com/submit', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                      'Accept': 'application/json'
                  },
                  body: json
              })
              .then(async (response) => {
                  let json = await response.json();
                  console.log("json"+json)
                  if (response.status == 200) {
                      result.innerHTML = "Form submitted successfully";
                  } else {
                      console.log("error"+response);
                      result.innerHTML = json.message;
                  }
              })
              .catch(error => {
                  console.log(error);
                  result.innerHTML = "Something went wrong!";
              })
              .then(function() {
                  form.reset();
                  setTimeout(() => {
                      result.innerHTML = "Send Message";
                  }, 3000);
              });
    }
});