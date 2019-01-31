// document.querySelectorAll("button")[0].addEventListener("click",clickedMe);
// document.querySelectorAll("button")[1].addEventListener("click",clickedMe);
// document.querySelectorAll("button")[2].addEventListener("click",clickedMe);
// document.querySelectorAll("button")[3].addEventListener("click",clickedMe);
// document.querySelectorAll("button")[4].addEventListener("click",clickedMe);
// document.querySelectorAll("button")[5].addEventListener("click",clickedMe);
// document.querySelectorAll("button")[6].addEventListener("click",clickedMe);

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function() {
    clickedMe(this.innerHTML);
    myShadow(this.innerHTML);
  });
}
  // document.querySelectorAll("button")[i].addEventListener("click",function(){
  //   alert("I got clicked");
  // });

document.addEventListener("keydown", function(event) {
  clickedMe(event.key);
  myShadow(event.key);
});

function clickedMe(key) {
  switch (key) {
    case "w":
      var playSongW = new Audio("sounds/crash.mp3");
      playSongW.play();
      break;
    case "a":
      var playSongA = new Audio("sounds/kick-bass.mp3");
      playSongA.play();
      break;
    case "s":
      var playSongS = new Audio("sounds/snare.mp3");
      playSongS.play();
      break;
    case "d":
      var playSongD = new Audio("sounds/tom-1.mp3");
      playSongD.play();
      break;
    case "j":
      var playSongJ = new Audio("sounds/tom-2.mp3");
      playSongJ.play();
      break;
    case "k":
      var playSongK = new Audio("sounds/tom-3.mp3");
      playSongK.play();
      break;
    case "l":
      var playSongL = new Audio("sounds/tom-4.mp3");
      playSongL.play();
  }
}

function myShadow(key) {
  document.querySelector("." + key).classList.add("pressed");

  setTimeout(function() {
    document.querySelector("." + key).classList.remove("pressed");
  }, 100);
}

// function add(num1,num2){
//   return num1 + num2;
// }
//
// function sub(num1,num2){
//   return num1 - num2;
// }
//
// function mult(num1,num2){
//   return num1 * num2;
// }
//
// function div(num1,num2){
//   return num1/num2;
// }
//
// function calculator(num1,num2,op){
//   return op(num1,num2);
// }
//
// var val = calculator(5,10,add);
// console.log(val);
