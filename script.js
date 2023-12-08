"use strict";

console.log("This Works");

// We select the Arrow and speed
const arrow = document.querySelector(".arrow");
const speed = document.querySelector(".speed");

// We use the navigator.geolocation
navigator.geolocation.watchPosition(
  (data) => {
    console.log(data);
    // WE DON"T HAVE ACCESS TO HEADING, and SPEED, so we cannot use on CHROME

    speed.textContent = Math.round(data.coords.speed);
    // for demonstartion sake
    speed.textContent = 35.44;

    // setting up the degrees of rotation
    document.documentElement.style.setProperty(
      `--rotate`,
      `${data.coords.heading}deg`
    );

    // for the sake of demonstartion
    document.documentElement.style.setProperty(`--rotate`, `${78}deg`);

    // another approach
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    // This is used if the user is not accepting the LOCALIZATIOn
    console.error(err);
    alert("YOU HAVE TO ACCEPT");
  }
);

// used to watch the position live
// navigator.geolocation.getCurrentPosition((data) => {
//   console.log(data);
// }); // used to get the actual position
