ARRAY 

length
push
pop
splice(postion for add/remove, remove position(optional), adding element )
shift, unshift
forEach(element, index, array) - up to 3


const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']
const finalPosition = function (moves) {
  let position = [0,0];
  for (const move of moves) {
    if (move === "north") {
      position[1] = position[1] + 1;
    } else if (move === "south"){
      position[1] = position[1] - 1;
    } else if (move === "east") {
      position[0] = position[0] + 1;
    } else if (move === "west") {
      position[0] = position[0] - 1;
    }
  }
  return position;
}
finalPosition(['north', 'north', 'west', 'west', 'north', 'east','north']);


Donuts...

forEach
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});

for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}

Cats...

words = ["cat", "in", "hat"];
words.forEach(function(word, num, all) {
  console.log("Word " + num + " in " + all.toString() + " is " + word);
});

map 
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

var improvedDonuts = donuts.map(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  return donut;
});


var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function(num){
  num *= 1.15;
  return  Number(num.toFixed(2));
  
});

console.log(totals);








FUNCTION

INLINE FUNCTION EXPRESSIONS

// Function expression that assigns the function displayFavorite 
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");
//-----------------------------------------------------------------------------------//
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");


function test(function1, fruit) {
  function1(fruit); }

  test(function thisIs(fruitName) {console.log("this is a " + fruitName);}, "banana");





LOOPS

FUNCTION with LOOPS

* 
* * 
* * * 
* * * * 
* * * * * 
* * * * * * 
* * * * * * * 
* * * * * * * * 
* * * * * * * * * 
* * * * * * * * * *

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(length) {
  // Let's build a huge string equivalent to the triangle
  var triangle = "";

  //Let's start from the topmost line


  for(var lineNumber=1; lineNumber<=length; lineNumber++){
      // We will not print one line at a time.
      // Rather, we will make a huge string that will comprise the whole triangle
      triangle = triangle + makeLine(lineNumber);
  }
  return triangle;

}

// test your code by uncommenting the following line
// Note that the function buildTriangle() must return a string 
// because the console.log() accepts a string argument
  console.log(buildTriangle(10));




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

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}
 
// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}


const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};

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
var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
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