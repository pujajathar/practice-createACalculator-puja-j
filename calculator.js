

/*
Practice: Create a Calculator
Instructions
Scenario: You are building a calculator for an online math game. The
calculator must include functionality to perform the following:
● Absolute Value Calculation: Given any number, return its absolute
value.
● Power Calculation: Calculate and return the value of a base raised to
a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers,
determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a
specified range.
● Custom Rounding: Round a number to a specified number of decimal
places.

Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math
module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program
where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12,
0.5, 27].
● Generate a random number between 1 and 50. 
1
● Round 23.67891 to 2 decimal places.
*/
                                                                            

// Functions for each operation


//1. Absolute value function

function absoluteValue(num)
{
    return Math.abs(num);
}
console.log(`Abslute value of -45.67 is: ` , absoluteValue(-45.67));


//2. power calculation

function power(base, exponent)
{ 
    return Math.pow(base, exponent);
}
console.log(`Power of base 3 and exponent 5 is: `, power(3, 5));


//3. Square root calculation
function squareRoot(num)
{
    return Math.sqrt(num);
}
console.log(`Square-root of 144 is: `, squareRoot(144));


//4. Maximum number
let array = [3, 78, -12, 0.5, 27];
function findMax(...array)   //....    is a operator to expand the values of array number into indivisual values
{
    return Math.max(...array);
}
console.log(`Max number from [3, 78, -12, 0.5, 27] is: `, findMax(...array));


//5. minimum number
function findMin(...array)   //....    is a operator to expand the values of array number into indivisual values
{
    return Math.min(...array);
}
console.log(`Min number from [3, 78, -12, 0.5, 27] is : `,findMin(...array));  // testing our function

//6. Random number generating
function random(minimumNumber, maximunNumber)
{
  return Math.random(minimumNumber, maximunNumber);
}
console.log(`Random number between 1 and 50 is: `, random(1, 50));

//7. Round number
function round(number1)
{
    return Math.round(number1);
} 
console.log(`Round of 23.67891 is: `, round(23.67891).toFixed(2));

function calculator(){

let Menu = {absolute: "absolute Value Calulation", 
    power: "power calculation",  
    squareRoot: "Square root calculation",
    max: "Maximum number calculation",
    min: "Minimum number calculation",
    random: "Random number generating",
    round: "Rounding Number"
    };
console.log("List of operations: ", "\n", Menu);

}

let readline = require('readline-sync');
let option = readline.question("Enter your option: ");

if(option == "absolute")
{
    let num1 = readline.question("Enter number: ");
    console.log(`Absolute value of ${num1} is: `, absoluteValue(num1));
}
else if (option == "power")
{
let base = readline.question("Enter base number: ");
let exponent = readline.question("Enter exponent: ");
console.log(`Power of base ${base} and exponent ${exponent} is: `, power(base, exponent));
}

else if(option == "squareRoot")
{
    let num = readline.question("Enter number: ");
    console.log(`Square-root of ${num} is: `, squareRoot(num));

}

else if(option == "max")
{
   let array = [20, 90, 1, 32, 80];
    console.log(`Maximum number from array ${array} is: `, findMax(...array));
}

else if(option == "min")
{
    let array = [20, 90, 1, 32, 80];
    console.log(`minimum number from ${array} is: `, findMin(...array));
}

else if(option == "random")
{
    let minimumNumber = readline.question("Enter minimum number: ");
    let maximumNumber = readline.question("Enter maximum number: ");
    console.log(`Random number between ${minimumNumber} and ${maximumNumber} is: `, random(minimumNumber, maximumNumber));
}