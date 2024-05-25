const seconHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

function setTime() {
  //get time (hours, minutes, seconds)
  const now = new Date();

  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();
  // time -> rotation
  const secondsRotation = seconds * 6; //360/60
  const minutesRotation = minutes * 6; //360/60
  const hoursRotation = (hours % 12) * 30 + 0.5 * minutes;

  //apply rotation
  seconHand.style.transform = `rotate(${secondsRotation}deg)`;
  minuteHand.style.transform = `rotate(${minutesRotation}deg)`;
  hourHand.style.transform = `rotate(${hoursRotation}deg)`;
}

setInterval(setTime, 1000);
