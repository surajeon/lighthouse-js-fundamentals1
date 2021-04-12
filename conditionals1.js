LOOPS




WHILE...IF

let x = 0;
while (stop) {
  if (condition-a) {
    console.log(output1);
  } else if (condition-b) {
    console.log(output2);
  } else {
    console.log(x);
  }
  x++ //iterate
}





FOR



//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//

CONDITIONALS




IF...ELSE

let x = 0;

if (x-condition-a) {
  console.log(bar);
} else if (x-condition-b) {
  console.log(bar2);
} else if (x-condition-c) {
  console.log(bar3);
} else {
  console.log(x);
}




LOGICAL OPERATORS

var balance = 325.00;
var checkBalance = true;
var isActive = false;

if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } 
    else if (isActive === true && balance === 0) {
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0) {
        console.log("Your balance is negative. Please contact bank.");
    } 
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    } 
} 
else {
    console.log("Thank you. Have a nice day!");
}




SWITCH...CASE

let x = 0;
switch (x) {
  case 1:
    console.log("hello1");
  case 2:
    console.log("hello2");
    break; //to prevent falling-through
  case 3: 
    console.log("hello3");
    .
    .
    .
 //last one does not need break statement. 
}




TERNARY OPERATORS

Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

var category = /* your code goes here */
eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category);


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//



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