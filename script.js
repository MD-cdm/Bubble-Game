var timer = 60;
var score = 0;
var hitrn = 0;
 // jispe click karoge wo element par event 
 //raise hoga, aur event listener naa milne par
 // event element ke parent par listener dhundhega,
 // waha bhi naa milne par event parent ke parent ke 
 //parent par listener dhundega


function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hitrn = Math.floor(Math.random.apply()*10)
    document.querySelector("#hitval").textContent = hitrn;
}

function makeBubble(){
    var clutter = "";

for(var i = 1; i<=168; i++){
    var rn = Math.floor(Math.random.apply()*10)
    clutter += `<div class="bubble">${rn}</div>`; 
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTime(){
   var timerint =  setInterval(function (){
        if(timer>0){
            timer--;
        document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h1>Game Over<h1/>`;
        }
    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click", function(dets){
   var clickednum = Number(dets.target.textContent);
   if(clickednum === hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
   }
})

makeBubble();
runTime();
getNewHit();
// increaseScore();










