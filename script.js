var half_week = 20;

var showCurrentTime = function() {
  var clock = document.getElementById("clock");
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  var clockTime = hours + ":" + minutes + ":" + seconds;

  var day = document.getElementById("day");
  switch (currentTime.getDay()) {
    case 1:
      currentDay = "Monday";
      break;
    case 2:
      currentDay = "Tuesday";
      break;
    case 3:
      currentDay = "Wednesday";
      break;
    case 4:
      currentDay = "Thursday";
      break;
    case 5:
      currentDay = "Friday";
      break;
    case 6:
      currentDay = "Saturday";
      break;
    case 0:
      currentDay = "Sunday";
      break;

  }

  var date = currentTime.getDate();
  var month = currentTime.getMonth() + 1;
  var year = currentTime.getFullYear();

  var clockDay = currentDay + " " + date + " / " + month + " / " + year

  day.innerText = clockDay;
  clock.innerText = clockTime;

}


var updateClock = function() {
  var time = new Date().getHours();
  var hours_in_day = 24;
  switch (new Date().getDay()) {
    case 1:
      var hour = time;
      break;
    case 2:
      var hour = hours_in_day + time;
      break;
    case 3:
      var hour = (hours_in_day * 2) + time;
      break;
    case 4:
      var hour = (hours_in_day * 3) + time;
      break;
    case 5:
      var hour = (hours_in_day * 4) + time;
      break;
    case 6:
      var hour = (hours_in_day * 5) + time;
      var message = "";
      break;
    case 0:
      var hour = (hours_in_day * 6) + time;
      var message = "";
      break;
  }

  if (hour < 61) {
    var isHalf = document.getElementById("isHalf");
    isHalf.innerText = "Nope.";
    isHalf.style.color = "red";
  } else if (hour < 121 && hour > 61) {
    var isHalf = document.getElementById("isHalf");
    isHalf.innerText = "YES!!"
    isHalf.style.color = "blue";
  } else {
    var isHalf = document.getElementById("isHalf");
    isHalf.innerText = "It's the weekend, why are you here?"
  }


  showCurrentTime();
}

updateClock();

setInterval(updateClock, 1000);


function displayText() {
  document.getElementById("text").innerHTML = "[redacted]";
