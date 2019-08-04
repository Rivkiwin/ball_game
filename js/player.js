function move(event) {
    var charCode = event.which;
    aa = document.getElementById("minp");
    bb = document.getElementById("send");
    
    if (charCode == 39) { 
        if (bb.getAttribute('data-row') != j - 1) {
            var x = parseInt(bb.getAttribute('data-row'));
            bb.setAttribute('data-row', x + 1);
         }

    }
    else
        if (charCode == 37) { 
            if (bb.getAttribute('data-row') != 0) {
                 bb.setAttribute('data-row', (bb.getAttribute('data-row')) - 1);
            }
 
        }

    var index = bb.getAttribute('data-row');
    var ballLocation = document.getElementById(`row_${index}`).getBoundingClientRect().left
    var vw= 100 / document.body.clientWidth;
    
     bb.style.left = ballLocation * vw + "vw";
     aa.style.left = (ballLocation - bb.getBoundingClientRect().width /2) * vw + "vw";
 
    if (charCode == 38) {
        clearTimeout(interval);
        sendMyBall();
    }
    //aa.style.left +
}

//פונקצית שליחה
function sendMyBall() {
    console.log(y);
    var pos = document.getElementById("send").getBoundingClientRect().top;
    var sendint = setInterval(higher, 1.5);
    //document.getElementById
    y = document.getElementById('row_' + (document.getElementById("send").getAttribute('data-row'))).lastChild;
    function higher() {
        if (pos < y.getBoundingClientRect().bottom) {
            clearInterval(sendint);
            CheckAnswer();
            interval = setTimeout(addBalls, 6000);
        }
        else {
            pos--;
            elem.style.top = pos + "px";
        }
        //y.innerHTML = eval(document.getElementById("exercise").innerHTML);
    }
}