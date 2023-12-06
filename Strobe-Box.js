//Global Variables

var _strobeIntervalId;
var _isStrobing = false;
var _defaultSpeed = 500;

//Functions

function startBoxStrobe(speed) {

  if(speed === undefined){
    speed = _defaultSpeed;
  }
  
    _strobeIntervalId = setInterval(()=>{
    		toggleTheBoxColor(); 
  		}, speed);
      
    _isStrobing = true;
}

function stopBoxStrobe(){
	clearInterval(_strobeIntervalId);
	_isStrobing = false;
}

function toggleTheBoxColor(){
var box = document.getElementById("box");
var boxClasses = box.classList;

if (box.classList.contains("blue-box")) {
box.className = "red-box";

} 

else if (box.classList.contains("red-box")) {
box.className = "blue-box";

}

else if (box.classList.contains("indigo-box")) {
box.className = "green-box"
}

else {
box.className = "indigo-box"

}

}

function changeBoxColor(){
  var box = document.getElementById("box");
  var boxClasses = box.classList;
  
  if (box.classList.contains("blue-box")) {
box.className = "indigo-box";

} 

else if (box.classList.contains("red-box")) {
box.className = "green-box";

}

else if (box.classList.contains("indigo-box")) {
box.className = "blue-box"
}

else {
box.className = "red-box"

}

}

function changeStrobeSpeed(speed){
	var speedValueElem = document.getElementById("speed-value");
	speedValueElem.innerHTML = speed + "ms";
  
  stopBoxStrobe();
  startBoxStrobe(speed); 
}
