var player //this player

//move to the game onclick
function moveToGame() {
    window.location.assign("gamePage.html")

}
//open/close dialogs
function openeDilog(id) {

    document.getElementById(id).style.display = "block";
}
function closeD(id) {

    document.getElementById(id).style.display = "none";
}
//data reception from the user
function rec1(id, Name, PassWord, ) {
    this.id = id;
    this.Name = Name;
    this.PassWord = PassWord;
    this.level = "+";
    this.points = "0";
    player = id;
    //save this player
    localStorage.setItem("player", player);
}
function rec2() {
    var name = document.getElementById("fullname").value;
    var Password = document.getElementById("password").value;
    var ReceivingUser = new rec1(localStorage.length + 1, name, Password);
    if (typeof window.localStorage != 'undefined') {
        var obj_as_text = JSON.stringify(ReceivingUser);        localStorage.setItem(localStorage.length, obj_as_text);
        document.getElementById("newUser").style.display = "none";
        document.getElementById("buttonLogin").addEventListener("click", checkUser);
        document.getElementById("buttonLogin").removeEventListener("click", rec2);
    }
    else alert("no localStorage");
}
//set level
function setLevel() {
    as_obj = JSON.parse(localStorage.getItem(localStorage.getItem("player")))
    as_obj["level"] = event.target.innerHTML;
    var obj_as_text = JSON.stringify(as_obj)
    localStorage.setItem(localStorage.getItem("player"), obj_as_text)
}
//check the user
function checkUser() {
    var d = 0;
    for (var i = 1; i < localStorage.length && !d; i++) {
        var as_obj = JSON.parse(localStorage.getItem(i));
        if (as_obj.Name == document.getElementById("fullname").value) {
            if (as_obj.PassWord == document.getElementById("password").value) {

                localStorage.setItem("player", i);
                document.getElementById("loding").style.display = "none";
            }

            else
                alert("PassWord is roung")
        }
    }
    if (!d)
       {
       document.getElementById("newUser").innerHTML = "user not difeind <br/> if you dont have user click here ";
       document.getElementById("newUser").style.display = "block";
    }
}
function newUser() {
    document.getElementById("buttonLogin").addEventListener("click", rec2);
    document.getElementById("buttonLogin").removeEventListener("click", checkUser);
    document.getElementById("newUser").style.display = "none";
}


function setIntervals() {
    window.setInterval("f1()", 200);
    arr = document.getElementById("wrapperbut").children;
    arrLength = arr.length
    for (i = 0; i < arrLength; i++)
        arr[i].addEventListener("click", setLevel);

}
// &copy names 
var d
   
function f1() {
    var p1=0;
    var p2=0;
    d = document.getElementById("h1").innerHTML;
    p1 = d.slice(0, 1);
    p2 = d.slice(1);
    document.getElementById("h1").innerHTML = p2 + p1;
}