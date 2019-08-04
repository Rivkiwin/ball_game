var y;//The ball the player threw at him;
var x;
var h;//height ball
var w;
var ball = document.getElementById("ball");
var rect
var n;
var bw;
var hw;// = rect.top;
var line;
var level = "+";
var player;//this player
var answer;
var cnt = 0;
var elem;
var interval;
var j;
var count = 1;
var img
var d = 1;
var im1;
var cap = 0;
var im2;
var dimg = 1;
var img2;

//sent cnt to passport page
function cnt11() {
    document.getElementById("cnt").innerHTML += " " + (JSON.parse(localStorage.getItem(localStorage.getItem("player"))))["points"];
}
//פונקצית מציאת מיקום X,Y
function init() {
    var div = document.getElementById("ball");
    var rect = div.getBoundingClientRect();
    x = rect.left;
    //y = rect.top;
    w = rect.width;
    h = rect.height;
    console.log("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
    console.log(y);
    craeteEx(); 
    addTabel(); 
    addBalls();
    document.get

}


 

function addTabel() {
    i = document.getElementById("window");
    n = (i.getBoundingClientRect().width / w) - 1;
    for (j = 0; j < n; j++) {
        i.innerHTML += "<div id='row_" + j + "'class='table'></div>"
    }
    document.getElementById("send").setAttribute('data-row', (j - 1));
    elem = document.getElementById("send");
}

//if (ball.getBoundingClientRect().bottn == document.getElementById("window").getBoundingClientRect().bottn)
//    clearInterval(Add2, 2000);

var colors;
//add balls

function addBalls() {

    d = 1;
    addBallsInterval();
    function addBallsInterval() {
        // atart :send to add ball all...time  
        if (!d) {
            clearTimeout(interval);
        }
        colors = ["#aebb98", "blue", "aqua", "#ff0079", "black", "#a600ff", "orange", "yellow", "white", "#9eff00"];
        //find the manion haed
        mh = document.getElementById("minp");
        mh1 = mh.getBoundingClientRect().top;
        //if (line > mh1 / 10 * 7)
        //   clearTimeout(interval);
        //console.log("1");
        i = document.getElementById("window");
        // rect = i.getBoundingClientRect();

        bw = i.getBoundingClientRect().bottom;
        hw = i.getBoundingClientRect().top
        var tru = [Math.round(Math.random() * (n - 1))];
        for (var j = 0; j < n && d; j++) {
            //debugger

            num = eval(Math.round(Math.random() * 9) + as_obj["level"] + Math.round(Math.random() * 9));
            if (j == tru)
                num = eval(document.getElementById("exercise").innerHTML);
            var color = colors[Math.round(Math.random() * 9)];
            document.getElementById("row_" + j + "").innerHTML += "<div id=" + j + line + " class='ball color_" + color + "' style='background:radial-gradient(circle at 10% 1%,#fefefe, " + color + ",#312323)' date-row=" + j + " date-line=" + line + " ;>" + num + "</div>"
            if (document.getElementById('row_' + j).lastChild.getBoundingClientRect().bottom > elem.getBoundingClientRect().bottom + 1) {
                clearTimeout(interval);
                d = 0;
                gameOver();
                break;
            }
        }
        line += h;
        interval = setTimeout(addBalls, 6000);
    }


}


function loadData() {
    var player = localStorage.getItem("player");
    as_obj = JSON.parse(localStorage.getItem(player));
}


//move minp
var minp = 0;
var aa = 0;
var bb = 0;



//back to homePage
function back() {
    window.location.assign("homePage.html"); 
}

//move to insruction
function moveToInstruction() {
    window.location.assign("instructions.html");
}
var d = 0;
//print passport
function printpas() {
    window.print();
}

//move to passport page
function movePrint() {
    window.location.assign("passport.html");
}

function setpoints() {
    as_obj["points"] = cnt;
    obj_as_text = JSON.stringify(as_obj)
    localStorage.setItem(localStorage.getItem("player"), obj_as_text);
}
//window.onbeforclose = function () { setpoints };
var fd = 0;
function floating() {
    if (!fd) {
        document.getElementById("nav").style.display = "block";
        fd = 1;
    }
    else {
        document.getElementById("nav").style.display = "none";
        fd = 0;
    }
}