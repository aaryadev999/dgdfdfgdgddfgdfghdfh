function addIt() {
    jhonny_user = document.getElementById("jhonny_logs_in").value;
    
    localStorage.setItem("jhonny_user", jhonny_user);

    window.location = "kwitter_room.html";
}