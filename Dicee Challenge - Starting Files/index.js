var random1 = Math.floor(Math.random()*6)+1;

var randompic = "dice"+random1+".png";

var randompicsource = "images/"+randompic; //along with source for dice 1

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randompicsource);

var random2 = Math.floor(Math.random()*6) + 1;

var randompic2 = "images/dice"+random2+".png";

document.querySelectorAll("img")[1].setAttribute("src",randompic2); // for dice 2

// if PLAYER 1 Wins
if(random1 > random2){
  document.querySelector("h1").innerHTML = "👑 Player 1 Wins";
}

//If PLAYER 2 Wins

else if(random1 < random2){
  document.querySelector("h1").innerHTML = "👑 Player 2 Wins";
}
// For Draw
else{
  document.querySelector("h1").innerHTML = "Draw";
}
