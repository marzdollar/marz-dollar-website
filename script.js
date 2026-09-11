function sendMessage() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "") {
        alert("Please enter your name.");
    } else if (email === "") {
        alert("Please enter your email.");
    } else {
        alert("Welcome " + name + "! Your message was received.");
    }

}
