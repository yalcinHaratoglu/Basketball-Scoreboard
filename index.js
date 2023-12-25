let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");
let home = 0;
let guest = 0;

function onePointHome() {
  home += 1;
  homeCount.innerText = home;
}

function twoPointHome() {
  home += 2;
  homeCount.innerText = home;
}

function threePointHome() {
  home += 3;
  homeCount.innerText = home;
}

function onePointGuest() {
  guest += 1;
  guestCount.innerText = guest;
}

function twoPointGuest() {
  guest += 2;
  guestCount.innerText = guest;
}

function threePointGuest() {
  guest += 3;
  guestCount.innerText = guest;
}

function reset() {
  guest = 0;
  guestCount.innerText = guest;
  home = 0;
  homeCount.innerText = home;
}

