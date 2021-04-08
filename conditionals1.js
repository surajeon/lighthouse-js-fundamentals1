const raining = true;
const cold = false;

if(raining) {
    console.log("Don't forget your umbrella!");
}


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const temperature = 12;

if (temperature < 0) {
    console.log("It's freezing outside!");
} else if (temperature < 15) {
    console.log("It's cold outside. get a jacket");
} else {
    console.log("Short sleeves are fine.")
}

console.log("Now you're ready to go outside!");

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//

const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

if (temperature < -40 || temperature > 40) {
    console.log("Maybe going outside isn't such a great idea…");
  }
if (!raining) {
    console.log("Leave your umbrella at home!");
  }