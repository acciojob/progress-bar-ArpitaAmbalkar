//your JS code here. If required.
/*let circle=document.querySelectorAll(".circle");
let line=document.querySelectorAll(".line");
let btn1=document.getElementById("next");
let btn2=document.getElementById("prev");
let i=1;
btn1.addEventListener("click",()=>{
	if(i>circle.length)
		i=circle.length;
	btn1.style.cursor="pointer";
	circle[i].classList.add("active");
	line[i].classList.add("active-line");
	i++;
	
});
btn2.addEventListener("click",()=>{
	btn2.style.cursor="pointer";
	circle[i].classList.remove("active");
	line[i].classList.remove("active-line");
	i--;
});*/

let circle = document.querySelectorAll(".circle");
let line = document.querySelectorAll(".line");
let btn1 = document.getElementById("next");
let btn2 = document.getElementById("prev");
let i = 0; // start from 0 (circle[0] is first)

btn1.addEventListener("click", () => {
  if (i < circle.length - 1) {
    i++;
    circle[i].classList.add("active");
    line[i - 1].classList.add("active-line");
	  // line between prev and current
	  
  }
	
  console.log("Next clicked, i =", i);
});

btn2.addEventListener("click", () => {
  if (i > 0) {
    circle[i].classList.remove("active");
    line[i - 1].classList.remove("active-line");
    i--;
  }
  console.log("Prev clicked, i =", i);
});