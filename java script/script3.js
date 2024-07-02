//function Minfinder(arr){//
   // return math.min(...arr);//
//}
//function Maxfinder(arr){//
    //return Math.Min(...arr);//
//}
//console.log(Maxfinder([10,20,3,40]));//

// document object model//
function darkmode() {
    document.body.style.backgroundColor="black";
    document.body.style.color="white";
    let button=document.getElementById("button");
    button.innerHTML=`<i class="bi bi-moon-stars-fill"></i>`
    button.innerHTML+="light mode";
 }
 function lightmode() {
     document.body.style.backgroundColor="white";
    document.body.style.color="black";
    let button=document.getElementById("button");
    button.innerHTML=`<i class="bi bi-brightness-alt-high-fill"></i>`
    button.innerHTML+="dark mode";
 }
 function modechange() {
     let btext = document.getElementById("button").innerText
     if (btext=="dark mode") {
         darkmode();
     }else if (btext=="light mode") {
         lightmode();
     }
 }