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



//1. Absolute value function
function absoluteValue(num)
{
 return Math.abs(num);
}
console.log(absoluteValue(-45.67));

//2. power calculation
function power(base, exponent)
{
    return Math.pow(base, exponent);
}
console.log(power(3, 5));


//3. Square root calculation
function squareRoot(num)
{
    return Math.sqrt(num);
}
console.log(squareRoot(144));


//4. Maximum number
let number = [3, 78, -12, 0.5, 27];
function findMax(...number)      //.... is a operator to expand the values of array number into indivisual values
{
    return Math.max(...number);
}
console.log(findMax(...number));


//5. minimum number
function findMin(...number)
{
    return Math.min(...number);
}
console.log(findMin(...number));

//6. Random number generating
function generateRandom(firstNumber, lastNumber);

