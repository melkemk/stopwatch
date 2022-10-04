let second = document.getElementById("second");
let minute = document.getElementById("minute");
let hour = document.getElementById("hour");
let paused = true;
let retry = document.getElementById("retry");
let retried = false;
retry.addEventListener("click", function re() {
  retried = true;
});

function start() {


document.body.onkeyup=function(e) {
    if((e.key==" ")||(e.keyCode==13)){
    //13 is enter 
        if(  paused == false){paused=true;
}
        else{paused=false;
        }
    }
    
       else if(e.key=='q'){
       paused=true;
       retried=true;}
        
      
}


  if (retried) {
    second.innerHTML = 0;
    minute.innerHTML = 0;
    hour.innerHTML = 0;
    retried = false;
  }
  if (!paused) {
  if(second.innerHTML<9){
  
    let temp=parseInt(second.innerHTML) + 1;
    second.innerHTML = "0"+temp;}
    else{
     second.innerHTML=parseInt(second.innerHTML) + 1;}
    if (second.innerHTML == 59) {
      if(minute.innerHTML<9){
     let tempa=parseInt(minute.innerHTML) + 1;
    minute.innerHTML = "0"+tempa;}
    else{
      minute.innerHTML = parseInt(minute.innerHTML) + 1;}
      if (minute.innerHTML == 59) {
        hour.innerHTML = parseInt(hour.innerHTML) + 1;
        minute.innerHTML = 0;

      }
      second.innerHTML = 0;
    }
  }
}


let pause = document.getElementById("pause");
let go = document.getElementById("go");
let gone = false;
pause.addEventListener("click", function paus() {
  paused = true;
  pause.style.display = "none";
  go.style.display = "block";

});
go.addEventListener("click", function goes() {
  paused = false;
  pause.style.display = "block";
  go.style.display = "none";

});



document.addEventListener('keyUp',  (l) =>{
if(l.code === "space"){
  paused = false;
  pause.style.display = "none";
  go.style.display = "block";
}}
);





window.setInterval(start, -2000000000);

/*document.body.onkeyup=function(e) {
    if(e.key==" "){
        document.getElementsByClassName("body").style.display="none";
    }
}*/
