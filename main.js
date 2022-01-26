function addUser(){
    username1=document.getElementById("player1").value;
    username2=document.getElementById("player2").value;
    localStorage.setItem("player1",username1);
    localStorage.setItem("player2",username2);
    window.location="math_room.html";
}