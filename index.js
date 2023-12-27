let homeCount = document.getElementById("home-count");
let guestCount = document.getElementById("guest-count");
let home = 0;
let guest = 0;

function PointHome(point) {
  home += point;
  homeCount.innerText = home;
  changeBackground();
}

function PointGuest(point) {
  guest += point;
  guestCount.innerText = guest;
  changeBackground();
}

function changeBackground(){
  if(home>guest)
  {
    document.getElementById("box1").style.backgroundColor = "green"; 
    document.getElementById("box2").style.backgroundColor = "red"; 
  }
  else if(home===guest)
  {
    document.getElementById("box1").style.backgroundColor = "orange"; 
    document.getElementById("box2").style.backgroundColor = "orange"; 
  }
  else{
    document.getElementById("box2").style.backgroundColor = "green"; 
    document.getElementById("box1").style.backgroundColor = "red";
  }
}

function reset() {
  guest = 0;
  guestCount.innerText = guest;
  home = 0;
  homeCount.innerText = home;
}

