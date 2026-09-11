function sendMessage() {

    let name = document.getElementById("name").value;
 let email = document.getElementById("email").value; 
    
    if (name === "") {
        alert("Please enter your name.");
    } else {
        alert("Welcome " + name + "! Your message was received.");
    }

}

