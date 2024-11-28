//random function to get single digit
// let random = Math.floor(Math.random() * 10);
// console.log(random);

//random to get dice number between 1 to 6
// let dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

//add two dice number and print the result
// let dice1 = Math.floor(Math.random() * 6) + 1;
// let dice2 = Math.floor(Math.random() * 6) + 1;
// console.log(dice1 + dice2);

//write a program that reads 5 randome 2 digit numbers and find ther sum and average
// let sum = 0;
// for (let i = 0; i < 5; i++) {
//   let num = Math.floor(Math.random() * 90) + 10;
//   sum += num;
//   console.log(num);
// }
// console.log(sum);
// console.log(sum / 5);

//unit conversion

//1ft = 12in then 42in = ?ft
// let inch = 42;
// let feet = inch / 12;
// console.log(feet);

//Rectangular Plot of 60 feet x 40 feet in meters, Calculate area of 25 such plots in acres
// let length = 60;
// let breadth = 40;
// let area = length * breadth;
// let areaInMeters = area * 0.3048;
// console.log(areaInMeters);
// let areaInAcres = areaInMeters / 43560;
// console.log(areaInAcres);

//Write a program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
// let min = 999;
// let max = 100;
// for(let i=0;i<5;i++){
//     let num = Math.floor(Math.random() * 900) + 100;
//     console.log(num)
//     if(num>max){
//         max = num;
//     }
//     if(num<min){
//         min = num;
//     }
// }
// console.log(min);
// console.log(max);


//Write a program that takes day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
// let day = process.argv[2];
// let month = process.argv[3];
// let result = false;
// if(month>3 && month<6){
//     // result = true;
//     if(month==3 && day>20){
//         result = true;
//     }
//     else if(month==6 && day<20){
//         result = true;
//     }
// }


// console.log(result);

//Write a program that takes a year as input and outputs the Year is a Leap Year or not a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless divisible by 400.
// let year = process.argv[2];
// let isLeapYear = false;
// if(year%4==0){
//     if(year%100!=0 || year%400==0){
//         isLeapYear = true;
//     }
// }
// console.log(isLeapYear);

//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
// let coin = Math.floor(Math.random() * 2)+1;
// console.log(coin)
// if(coin==1){
//     console.log("Heads");
// }
// else{
//     console.log("Tails");
// }

//Read a single digit number and write the number in word
// let num = process.argv[2];
// let word = "";
// if(num==0){
//     word = "Zero";
// }
// else if(num==1){
//     word = "One";
// }
// else if(num==2){
//     word = "Two";
// }
// else if(num==3){
//     word = "Three";
// }
// else if(num==4){
//     word = "Four";
// }
// else if(num==5){
//     word = "Five";
// }
// else if(num==6){
//     word = "Six";
// }
// else if(num==7){
//     word = "Seven";
// }
// else if(num==8){
//     word = "Eight";
// }
// else if(num==9){
//     word = "Nine";
// }
// else{
//     word = "Invalid Input";
// }
// console.log(word);

//Read a Number and Display the week day (Sunday, Monday,…)
// let num = process.argv[2];
// let day = "";
// if(num==1){
//     day = "Sunday";
// }
// else if(num==2){
//     day = "Monday";
// }
// else if(num==3){
//     day = "Tuesday";
// }
// else if(num==4){
//     day = "Wednesday";
// }
// else if(num==5){
//     day = "Thursday";
// }
// else if(num==6){
//     day = "Friday";
// }
// else if(num==7){
//     day = "Saturday";
// }
// else{
//     day = "Invalid Input";
// }
// console.log(day);

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,…
// let num = process.argv[2];
// let unit = "";
// if(num==1){
//     unit = "Unit";
// }
// else if(num==10){
//     unit = "Ten";
// }
// else if(num==100){
//     unit = "Hundred";
// }
// else if(num==1000){
//     unit = "Thousand";
// }
// else{
//     unit = "Invalid Input";
// }
// console.log(unit);

//Enter 3 Numbers do following arithmetic operation and find the one that computes to max or min value
//1. a + b * c  3. c + a / b
//2. a % b + c  4. a * b + c
// let a = process.argv[2];
// let b = process.argv[3];
// let c = process.argv[4];

// let result1 = a + (b * c);
// let result2 = (a % b) + c;
// let result3 = c + (a / b);
// let result4 = (a * b) + c;

// let max = Math.max(result1, result2, result3, result4);
// let min = Math.min(result1, result2, result3, result4);

// console.log(max);
// console.log(min);

//Read a single digit number and write the number in word using Case
// let num = process.argv[2]
// let word = "";
// switch(num){
//     case "0":
//         word = "Zero";
//         break;
//     case "1":
//         word = "One";
//         break;
//     case "2":
//         word = "Two";
//         break;
//     case "3":
//         word = "Three";
//         break;
//     case "4":
//         word = "Four";
//         break;
//     case "5":
//         word = "Five";
//         break;
//     case "6":
//         word = "Six";
//         break;
//     case "7":
//         word = "Seven";
//         break;
//     case "8":
//         word = "Eight";
//         break;
//     case "9":
//         word = "Nine";
//         break;
//     default:
//         word = "Invalid Input";
// }
// console.log(word);

//Read a Number and Display the week day (Sunday, Monday,…) using case
// let num = process.argv[2];
// let day = "";

// switch (num) {
//     case "1":
//     day = "Sunday";
//     break;

//     case "2":
//     day = "Monday";
//     break;

//     case "3":
//     day = "Tuesday";
//     break;

//     case "4":
//     day = "Wednesday";
//     break;

//     case "5":
//     day = "Thursday";
//     break;

//     case "6":
//     day = "Friday";
//     break;

//     case "7":
//     day = "Saturday";
//     break;

//     default:
//     day = "Invalid Input";
// }
// console.log(day);

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,… using case
// let num = process.argv[2];
// let unit = "";

// switch (num){
//     case "1":
//         unit = "Unit";
//         break;
//     case "10":
//         unit = "Ten";
//         break;
//     case "100":
//         unit = "Hundred";
//         break;
//     case "1000":
//         unit = "Thousand";
//         break;
//     default:
//         unit = "Invalid Input";
// }
// console.log(unit);

//Write a program that takes User Inputs and does Unit Conversion of different Length units
//1. Feet to Inch 3. Inch to Feet
//2. Feet to Meter 4. Meter to Feet

//Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n.
// let n = process.argv[2];
// for(let i=0;i<=n;i++){
//     console.log(2**i);
// }

//Write a program that takes a command-line argument n and prints the nth harmonic number. Harmonic Number is of the form
// //H(n) = 1/1 + 1/2 + 1/3 + 1/4 + ... + 1/n
// let n = process.argv[2];

// for(let i=1;i<=n;i++){
//     let num = `1/${i}`;
//     console.log(num)
// }

//Write a program that takes a input and determines if the number is a prime.
// let num = process.argv[2];
// let isPrime = false;
// for(let i=2;i<=num/2;i++){
//     if(num%i==0){
//         isPrime = true;
//         break;
//     }
// }

// if(isPrime){
//     console.log("Not Prime");
// }else{
//     console.log("Prime");
// }

//Extend the program to take a range of number as input and output the Prime Numbers in that range.
// let start = parseInt(process.argv[2]);
// let end = parseInt(process.argv[3]);

// for(let i=start;i<=end;i++){
//     let isPrime = true;
//     for(let j=2;j<=i/2;j++){
//         if(i%j===0){
//             isPrime = false;
//             break;
//         }
//     }
//     if(isPrime){
//         console.log(i);
//     }   
// }

//factorial
// let num = parseInt(process.argv[2]);
// let fact=1;

// for(let i=1;i<=num;i++){
//     fact = fact*i;
// }

// console.log(fact);

//prime factorization of a number
// let num = parseInt(process.argv[2]);
// for (let i = 2; i <= Math.sqrt(num); i++) {
//     while (num % i === 0) {
//         console.log(i);
//         num = num / i;
//     }
// }

//Write a program that takes a command-line argument n and prints a table of the powers of 2 that are less than or equal to 2^n till 256 is reached..
// let n = process.argv[2];
// let power = 1;
// for(let i=0;i<=n;i++){
//     console.log(2**i);
//     if(2**i==256){
//         break;
//     }
// }


//Find the Magic Numbera. Ask the user to think of a number n between 1 to 100. Then check with the user if the number is less then n/2 or greaterc. Repeat till the Magic Number is reached..
// let num = prompt("Enter a number between 1 to 100");

// while(!num>num/2 || !num<num/2){
//     num = prompt("Enter a number between 1 to 100");
// }

//Extend the Flip Coin problem till either Heads or Tails wins 11 times.
// let heads = 0;
// let tails = 0;
// while (heads < 11 && tails < 11) {
//     let random = Math.floor(Math.random() * 2) + 1;
//     // console.log(random)
//     if (random === 1) {
//         heads++;
//         console.log("heads")
//     } else {
//         tails++;
//         console.log("tails")
//     }
// }

//Write a Program where a gambler starts with Rs 100 and places Re 1 bet until he/she goes broke i.e. no more money to gamble or reaches the goal of Rs 200. Keeps track of number of times won and number of bets made.
// let amount = 100;
// let goal = 200;
// let wins = 0;
// let bets=0;
// while(amount>0 || amount===200){
//     let bet = Math.floor(Math.random() * 2) + 1;
//     if(bet===1){
//         amount++;
//         wins++;
//         console.log("Won ",wins);
//     }else{
//         amount--;
//     }
//     bets++;
//     amount--;
// }

// console.log("Total bets made ",bets);
// console.log("Total wins ",wins);

//Help user find degF or degC based on their Conversion Selection. Use 
//Case Statement and ensure that the inputs are within the Freezing Point ( 
//0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
//a. degF = (degC * 9/5) + 32
//b. degC = (degF – 32) * 5/9
//ensure that the inputs are within the Freezing Point ( 
//0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )


// let choice = process.argv[2];
// let temp = parseInt(process.argv[3]);
// func(temp, choice);

// function func(temp, choice) {
//     let result = 0;

//     switch (choice) {
//         case "1":
//             if (temp >= 0 && temp <= 100) {
//                 result = (temp * 9 / 5) + 32;
//                 // console.log(result);
//             } else {
//                 console.log("Temperature must be between 0°C and 100°C for conversion to Fahrenheit.");
//             }
//             break;
//         case "2":
//             if (temp >= 32 && temp <= 212) {
//                 result = (temp - 32) * 5 / 9;
//                 // console.log(result);
//             } else {
//                 console.log("Temperature must be between 32°F and 212°F for conversion to Celsius.");
//             }
//             break;
//         default:
//             console.log("Invalid Input");
//     }
//     console.log(result);
// }

//Write a function to check if the two numbers are Palindromes
// function isPalindrome(num1,num2){
//     let reverse = 0;
//     let temp = num1;
//     while(temp>0){
//         let rem = temp%10;
//         reverse = reverse*10+rem;
//         temp = parseInt(temp/10);
//     }
//     return reverse===num2;
// }

// console.log(isPalindrome(121,111));

// . Take a number from user and check if the number is a Prime then show 
// that its palindrome is also prime
// a. Write function check if number is Prime 
// b. Write function to get the Palindrome. 
// c. Check if the Palindrome number is also prime
function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function getPalindrome(num) {
    let reverse = 0;
    let temp = num;
    while (temp > 0) {
        let rem = temp % 10;
        reverse = reverse * 10 + rem;
        temp = parseInt(temp / 10);
    }
    return reverse;
}

let num = parseInt(process.argv[2]);
let isPrimeNum = isPrime(num);
if (isPrimeNum) {
    let palindrome = getPalindrome(num);
    let isPalindromePrime = isPrime(palindrome);
    console.log(isPalindromePrime);
} else {
    console.log("Number is not prime");
}

