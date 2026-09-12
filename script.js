function sendMessage() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;if (!email.includes("@")) {
    alert("Please enter a valid email.");
    return;
}    
    if (name === "") {
        alert("Please enter your name.");
    } else if (email === "") {
        alert("Please enter your email.");
        else if (message === "") {
    alert("Please enter your message.");
}    } else {
        alert("Welcome " + name + "! Your message was received.");
    }

}
