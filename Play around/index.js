// Ternary operator

// let age = 15;
// message = age >= 16 ? "You are old enough to drive!" : "you're Not old enough to drive";
//
// console.log(message);

// purchaseAmount = 125;
// discount = purchaseAmount - (purchaseAmount * 10/100);
//
// purchaseTotal = purchaseAmount >= 100 ? discount : purchaseAmount
//
// console.log(purchaseTotal);

// Switch cases

// let day = "pizza";
//
// switch(day){
//     case 1:
//         console.log("It is Monday");
//     break;
//
//     case 2:
//         console.log("It is Tuesday");
//     break;
//
//     case 3:
//         console.log("It is Wednesday");
//     break;
//
//     case 4:
//         console.log("It is Thursday");
//     break;
//
//     case 5:
//         console.log("It is Friday");
//     break;
//
//     case 6:
//         console.log("It is Saturday");
//     break;
//
//      case 7:
//         console.log("It is Sunday");
//     break;
//
//     default:
//         console.log(`${day} is not a day`);
// }

// let testScore = "pizza";
// let letterGrade;
//
// switch(testScore) {
//     case testScore >= 90:
//         letterGrade = "A";
//     break;
//
//       case testScore >= 70:
//         letterGrade = "B";
//     break;
//
//       case testScore >= 50:
//         letterGrade = "C";
//     break;
//
//       case testScore >= 20:
//         letterGrade = "E";
//     break;
//
//       case testScore < 20:
//         letterGrade = "F";
//     break;
//
//     default: console.log(`${testScore} is not a valid test score`);
// }
//
// console.log(letterGrade)


/*************STRING SLICING*****************/
// const fullName = "Brosph Coden";
// const email = "bro1@gmail.com";
//
// let firstName = fullName.slice(0, fullName.indexOf(" "));
// let LastName = fullName.slice(fullName.indexOf(" ")+1);
// let username = email.slice(0, email.indexOf("@"));
// let extension = email.slice(email.indexOf("@")+1);
// let negative = email.slice(-1, email.indexOf("@"));
//
// console.log(`First Name: ${firstName}`);
// console.log(`Last Name: ${LastName}`);
// console.log(`Username: ${username}`);
// console.log(`Extension: ${extension}`)
// console.log(`${negative}`)

/*************METHOD CHAINING*****************/
// let username = "  sANDilEcodE";
// username = username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();
//
// let extraChars = username.slice(1);
// extraChars = extraChars.toLowerCase();
// username = (letter + extraChars)

// username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
//
// console.log(username);

/*************LOGICAL OPERATORS*****************/
// used to combine or manipulate boolean value

// const temp = 25;
//
// if(temp <= 0 || temp >= 30 ) {
//     console.log("The weather is bad");
// } else {
//     console.log("The weather is Good!");
// }

/*************STRICT EQUALITY*****************/

// const PI = "3.14";
//
// if(PI !== 3.14) {
//     console.log("This is NOT PI");
// } else {
//     console.log("This is PI");
// }

/*************WHILE LOOPS*****************/
// let isLoggedIn = true;
// let username;
// let password;

// while (!isLoggedIn) {
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter you Password");
//     if (username === "myUsername" && password === "myPassword") {
//         isLoggedIn = true;
//         console.log("You are logged in!");
//     } else {
//         window.alert("Invalid Credentials, Please try again");
//     }
// }

// do {
//     username = window.prompt("Enter your username");
//     password = window.prompt("Enter you Password");
//
//     if (username === "myUsername" && password === "myPassword") {
//         isLoggedIn = true;
//         window.alert("You are logged in!");
//     } else {
//         window.alert("Invalid Credentials, Please try again");
//     }
// } while (!isLoggedIn)


/*************FOR LOOPS*****************/

// console.log("***************************\nThese are your even numbers\n***************************")
//
// for(let i = 2; i <= 50; i+=2) {
//     if(i == 20) {
//         continue;
//     }
//     console.log(i);
// }
//
// console.log("***************************\n\n***************************")
//
// for(let i = 1; i <= 50; i+=2) {
//     if(i == 25) {
//         continue;
//     }
//     console.log(i);
// }
//
// console.log("***************************\nThese are your odd numbers\n***************************")

/*************JAVASCRIPT FUNCTIONS*****************/








