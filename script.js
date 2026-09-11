function sendMessage() {

    let name = document.getElementById("name").value;

    if (name === "") {
        alert("Please enter your name.");
    } else {
        alert("Welcome " + name + "! Your message was received.");
    }

}
