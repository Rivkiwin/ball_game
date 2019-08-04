//this function create exersize
function craeteEx() {
    var n1 = Math.round(Math.random() * 10);
    var n2 = Math.round(Math.random() * 10)
    document.getElementById("exercise").innerHTML = n1 + as_obj["level"] + n2;

}


var arr
function CheckAnswer() {
    var bottom = elem.getBoundingClientRect().bottom;
    if (y.innerHTML == eval(document.getElementById("exercise").innerHTML)) {
        arr = document.getElementsByClassName(y.classList[1]);
        var smaler = setInterval(small, 100);
        var deletee = setInterval(delet, 200);
        cnt += 5;
        if (cnt == 100) {
            document.getElementById("nava").innerHTML="wonderfull!!😍😊😍😘congretulation!!!"
            gameOver();
        }

        craeteEx();
        success();
        function small() {
            arr[arr.length - 1].style.width = arr[arr.length - 1].style.width + 10 + "px";

            if (arr.length == 1)
                clearInterval(smaler);
        }
        function delet() {
            arr[arr.length - 1].remove();
            if (arr.length == 0) {

                clearInterval(deletee);
            }
        }

    }
    else {
        fail();
    }
    elem.style.bottom = (100 / document.body.clientWidth) * bottom;
    elem.style.top = "";

}
