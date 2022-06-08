// var distance = 0;
// var intervalId;

// function playFunc() {
//   if (true) {
//     moveRight();
//   }
//    else if (true) {
//     moveDown();
//   }
//    else if (true) {
//     moveLeft();
//   }
//    else if {
//        moveUp();
//    }
//    else{

//    }

// }

// function moveRight() {
//   intervalId = setInterval(() => {
//     box.style.left = distance++ + "px";
//   }, 10);
// }
// function moveLeft() {
//   intervalId = setInterval(() => {
//     box.style.Right = distance++ + "px";
//   }, 10);
// }
// function moveDown() {
//   intervalId = setInterval(() => {
//     box.style.top = distance++ + "px";
//   }, 10);
// }
// function moveUp() {
//   intervalId = setInterval(() => {
//     box.style.bottom = distance++ + "px";
//   }, 10);
// }
// function stopFunc() {
//   if (distance == 150) {
//     pauseFuncInterval();
//   }
// }
// function pauseFunc() {
//   clearInterval(intervalId);
// }






// 2.	צרו כפתור שמתחיל את האנימציה.
// 3.	צרו כפתור שעוצר את האנימציה.
// 4.	צרו ארוע של ENTER שמבטל את האנימציה.


// var distance = 0;
// var tempIntervalId;
// function goBiggerFunction() {
//   tempIntervalId = setInterval(() => {
//     document.getElementById("container").style.height = distance++ + "vh";
//   }, 100);
// }

// function stopFunction() {
//   clearInterval(tempIntervalId);
// }

// function clearFunction() {
//   clearInterval(tempIntervalId);
// }

// function startFunction() {
//   goBiggerFunction();
// }

// function stopFunction() {
//   clearFunction();
// }

// function pressAndStop(e) {
//   if (e.key == "Enter") {
//     stopFunction(); //   console.log(argument);
//   }
// }




// 5.	צרו אלמנט בגודל סביר שבעת לחיצה עליו הוא מחליף צבעים בצורה רנדומלית.


// function changeTheColor(){
// var colorA = Math.floor(Math.random()*256)
// var colorB = Math.floor(Math.random()*256)
// var colorC = Math.floor(Math.random()*256)
// id_div.style.backgroundColor = "rgb("+colorA+","+colorB+","+colorC+")"; 

// }




// 6.	צרו תוכנית המקבלת מהמשתמש רוחב וגובה ואז מציגה באנימציה אלמנט שגודל עד לגודל שהמשתמש הכניס, צרו ארוע של SAPCE שמבטל את האנימציה.

var counter = 0;
function playFunction(){
intervalId = setInterval(()=>{
if(counter == put1.value && counter == put2.value){
    id_div1.style.width = counter++ +"px";
    id_div1.style.hight = counter++ + "px";

    return StopFunction()
}
id_div1.style.width = counter++ +"px"
id_div1.style.hight = counter++ +"px"
},100)
}

function stopTheAnimation(e){
    if(e.key == " "){
        StopFunction();
    }
}


function StopFunction(){
    clearInterval(intervalId);
}










