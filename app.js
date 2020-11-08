// if (1 + 2 === 2) {
//     console.log("Maths still work")
// } else {
//     console.log("Maths not correct")
// }

// const dayOfWeek = 'Tuesday';

// if (dayOfWeek === 'Monday') {
//     console.log("I Love Mondays")
// } else if (dayOfWeek === 'Sunday') {
//     console.log('I Love Sundays')
// } else if (dayOfWeek === 'Saturday') {
//     console.log('I hate working on Saturday')
// } else {
//     console.log('I like working the week days than weeken')
// }


// const entryYear = 1000;

// if (entryYear < 5) {
//     console.log('You have a free pass !')
// } else if (entryYear < 10) {
//     console.log('Your fee is $10')
// } else if (entryYear < 65) {
//     console.log('You are an adult, you will pay $20')
// } else {
//     console.log('You are not qualified to enter')
// }

//BEST SOLUTION using OR || and &&

// const age = 100;

// if ((age >= 0 && age < 5) || age >= 65) {
//     console.log("FREE")
// } else if (age >= 5 && age < 10) {
//     console.log("$10")
// } else if (age > 10 && age < 65) {
//     console.log("$20")
// } else {
//     console.log("Invalid Age")
// }

//Password must be greater than 6 characters
// Password must not include space

// const password = prompt('Please enter a password');
// if (password.length >= 6 && password.indexOf(' ') === -1) {
//     console.log('Valid Password')
// } else {
//     console.log('Inavalid Password')
// }


//WHILE LOOP FOR GUESS AND UNKOWN NUMBER OF TIME

// const secretCode = "Nathan";

// let guess = prompt("Enter a secret code.....");

// while (guess !== secretCode) {
//     guess = prompt("Enter a secret code...");
// }

// console.log("Congratulation!! You won");


//GUESSING GAME
// let maximum = parseInt(prompt("Enter the maximum number!"));
// while (!maximum) {
//     maximum = parseInt(prompt("Enter a valid number"));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;

// let attempt = 1;

// let guess = parseInt(prompt("Enter your first guess"));
// while (parseInt(guess) !== targetNum) {
//     if (guess === 'q') break;
//     attempt++;
//     if (guess > targetNum) {
//         guess = prompt("Too high! Enter a new guess:");
//     } else {
//         guess = prompt("Too low! Enter a new guess:");
//     }
// }
// if (guess === 'q') {
//     console.log("OK, QUITTING!");
// } else {
//     console.log("CONGRATS YOU WIN");
//     console.log(`You got it! It took you ${attempt} guesses`);
// }


//BUILDING TO DO LIST WITH