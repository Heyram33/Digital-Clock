const hours=document.getElementById("hour")
const minutes=document.getElementById("minutes")
const seconds=document.getElementById("seconds")
const ampm=document.getElementById("ampm")
function clock(){
    let h=new Date().getHours()
    let m=new Date().getMinutes()
    let s=new Date().getSeconds()
    let apm="AM";
  
    if (h>=12){
        h=h-12;       
        apm="PM"
    }


  
    h=(h==0)?12:h;
    h=h<10? "0"+h:h;
    hours.innerText=h;
    minutes.innerText=m;
    seconds.innerText=s;
    ampm.innerText=apm;
    setTimeout(()=>{clock() },1000)

}
clock()
