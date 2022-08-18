var hr = 0;
var min = 0;
var sec = 0;
var counter = 0;

var  hour = document.getElementById('hr');
var minute = document.getElementById('min');
var second = document.getElementById('sec');
var count = document.getElementById('count');

var timer = false;
var timerId = false;
function startClock(){
    //console.log("startclock");
    if(timerId == false )
    {
      timer = true;
      stopWatchfunction();
      timerId = true;
    }

}

function stopClock(){


  timer = false;

   timerId = false;
}

function resetClock(){
  timer = false;
  hr = 0;
  min = 0;
  sec = 0;
  counter = 0;

  hour.innerHTML = "00";
  minute.innerHTML = "00";
  second.innerHTML = "00";
  count.innerHTML = "00";

   timerId = false;

}


var laptime="";

function lapfunction(){
    var lapdiv=document.getElementById('lapdiv');
    var li = document.createElement("li");
    li.innerHTML = laptime;
    lapdiv.appendChild(li);
}
function clearlapfunction(){
    lapdiv.innerHTML = "";
}



function stopWatchfunction(){
  if(timer == true){

    counter = counter + 1;

     if(counter == 100){
       sec = sec + 1;
       counter = 0;
     }



     if(sec==60){
       min = min+1;
       sec = 0
     }

     if(min == 60){
         hr = hr+1;
         min = 0;
         sec = 0;
     }


     var  hrString = hr;
     var  minString = min;
     var  secString = sec;
     var countString = counter;

     if(hr < 10){
       hrString = "0" + hrString;
     }
     if(min < 10){
       minString= "0" + minString;
     }
     if(sec < 10){
       secString = "0" + secString;
     }
     if(counter < 10){
       countString = "0" + countString;
     }




     hour.innerHTML = hrString;
     minute.innerHTML = minString;
     second.innerHTML = secString;
     count.innerHTML = countString;


     laptime = hrString +  ":" + minString + ":" + secString  + ":" + countString;


     timerId = setTimeout( "stopWatchfunction()",10);

  }
}
