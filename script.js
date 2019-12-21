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
  var month = currentTime.getMonth();
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
  document.getElementById("text").innerHTML = "What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little 'clever' comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You're fucking dead, kiddo.";
}
