const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

// CHANGING BUTTON TEXT AND COLOR

console.log(chronometer.startClick())

btnLeft.addEventListener('click', function(){
  if (btnLeft.className === 'btn start') {btnLeft.className = 'btn stop'}
  else {btnLeft.className = 'btn start'}

  if (btnLeft.innerText === 'START') {btnLeft.innerText = 'STOP'}
  else {btnLeft.innerText = 'START'}

  if(btnLeft.className === 'btn stop') { chronometer.startClick() }
  else { chronometer.stopClick() } 
})

btnRight.addEventListener('click', function(){
  if(btnRight.className === 'btn reset'){btnRight.className = 'btn split'}
  else {btnRight.className = 'btn reset'}

  if(btnRight.innerText === 'RESET'){btnRight.innerText = 'SPLIT'}
else {btnRight.innerText = 'RESET'}
})

function printTime() {
  // ... your code goes here
}

function printMinutes() {
  // ... your code goes here
}

function printSeconds() {
  // ... your code goes here
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  // ... your code goes here
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  // ... your code goes here
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  // ... your code goes here
});
