// This file will hold random functions used throughout the program such as a random chance function or dice roll function


// Function to find a random chance out of 100
let randomChance = () => {
  let x = Math.random() * 100;
  return x;
}

// Dice ROll Function
function diceRoll(dice){
  let roll = Math.floor(Math.random() * dice) + 1;
  return roll;
}

//Styling functions for text
let color2 = (target) => {
  if (target == 1){
    return "class='enemys'";
  } else {
    return "class='players'";
  }
}

let color = (stat1, stat2) => {
  let colors = Math.round((stat1 / stat2) * 100);

  console.log("Hp %: " + colors);
  if (colors < 25) {
    return "class='low'";
  }
  else if (colors >= 25 && colors < 75){
    return "class='mid'";
  }
  else if (colors >= 75){
    return "class='high'";
  }

}

// Finds spot on map
let findSpot = () => {
  let x = me.x * 10;
  let y = me.y;
  let z = x + y;
  return z;
}