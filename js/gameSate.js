async function delay(timeout){
    return  new Promise((resolve) => setTimeout(resolve, timeout));
  }
  
//img function
async function success() {
 
    for(var count= 0; count< 6 ; count++){
 
        await delay(200);    
        switch(count % 2){  
        case 0: 
            document.getElementById("img1").src = "picture/בודד בלי.png"
            break;
        
        case 1: 
            document.getElementById("img1").src = "picture/כפיים בלי.png";
            break;
    
    }
}
}


async function fail() {
    
    for(var count= 0; count< 6 ; count++){
 
        await delay(200);    
        switch(count % 2){         
            case 0: 
             document.getElementById("img1").src = "picture/לשון בלי.png";
            break; 

            case 1: 
            document.getElementById("img1").src = "picture/בודד בלי.png";
            break;
    
    } 
}

}


//img function
async function success_withInterval() {

    var animationinterval= setInterval(animation, 200);
    var count= 0;

    function animation(){
       
        switch(count % 2){  
            case 0: 
                document.getElementById("img1").src = "picture/בודד בלי.png"; 
                break;
            
            case 1: 
                document.getElementById("img1").src = "picture/כפיים בלי.png";
                break;
        }

    if (count == 5) {
        count = 0;
        clearInterval(animationinterval);
    }
  }
}


function fail_withIntrval() {
    
    var animationinterval= setInterval(animation, 200);


    function animation(){
    if (count == 1)
        document.getElementById("img1").src = "picture/לשון בלי.png";
    if (count == 2) {
        document.getElementById("img1").src = "picture/בודד בלי.png";
        count = 0;
        clearInterval(animationinterval);
        count++;
    }
}

}

var kg; 
//gameover
function gameOver() {
    var over = document.getElementById("over");
    document.getElementById("nava").style.display = "block";
    var pos = 0;
    var kg = setInterval(frame, 5);
    function frame() {
        if (pos == 400) {
            clearInterval(kg);
            setp = setInterval(back(), 100000);
        }
        else {
            pos++;
            over.style.top = pos + "px";
            over.style.left = pos + "px";
        }

    }

}