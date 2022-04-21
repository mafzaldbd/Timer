  
  var hour = document.getElementById("hour");
  var min = document.getElementById("min");
  var sec = document.getElementById("sec");
  var ms = document.getElementById("ms");
  var count_hour = 0;
  var count_min = 0;
  var count_sec = 0;
  var count_ms = 0;
  function funhour(){
      count_hour++;
      hour.innerHTML = count_hour;
  }
  function funmin(){
      count_min++;
      if(count_min > 60){
          count_min = 0;
      }
      min.innerHTML = count_min;
  }
  function funsec(){
      count_sec++;
      if(count_sec > 60){
          count_sec = 0;
      }
      sec.innerHTML = count_sec;
  }
  function funms(){
      count_ms++;
      if(count_ms > 100){
          count_ms = 0;
      }
      ms.innerHTML = count_ms;
  }
  var stopms;
  var stopsec;
  var stopmin;
  var stophour; 
  var play = document.getElementById("start");
  play.addEventListener("click",start);

   function start(){
    stopms =   setInterval(funms,1);
    stopsec =   setInterval(funsec,1000);
    stopmin =   setInterval(funmin,60000);
    stophour =   setInterval(funhour,3600000);
    pause.style.display="inline";
    spli.style.display="inline";
    play.style.display="none";
    clr.style.display="none";
   }

   var pause = document.getElementById("stop");
   pause.addEventListener("click",stop); 
   pause.style.display="none";
   function stop(){
       clearInterval(stopms);
       clearInterval(stopsec);
       clearInterval(stopmin);
       clearInterval(stophour);
       play.innerHTML = "resume";
       play.style.display="inline";
       pause.style.display="none";
       clr.style.display="inline";
       spli.style.display="none";
   }
   
   var parent = document.getElementById("timer");

   var spli  = document.getElementById("split");
    spli.style.display="none";
    spli.addEventListener("click",split); 
    
   function split(){
      var ele = document.createElement("p");   
       parent.appendChild(ele);
       var temp = count_hour + ":" +count_min + ":" + count_sec + ":" + count_ms;
       ele.innerHTML= temp;
       ele.style.display = "block";      
       ele.style.margin = "10px";      
       ele.style.backgroundColor = "rgb(226, 226, 226)";      
   }
    
   var clr = document.getElementById("clr");
    clr.style.display="none";
    clr.addEventListener("click",clear);
    function clear(){
     count_hour = 0;
     count_min = 0;
     count_sec = 0;
     count_ms = 0; 
     hour.innerHTML = "00";
     min.innerHTML = "00";
     sec.innerHTML = "00";
     ms.innerHTML = "00";
     play.innerHTML = "start";
     this.style.display="none";
     var temp2 = document.getElementsByTagName("p");
     for(let x of temp2){
         x.style.display="none";
     }
   }

var bottom = document.getElementsByTagName('footer');
 var h = Number(window.innerHeight) - 426;

    bottom[0].style.marginTop = h+"px"; 