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
let username = "  sANDilEcodE";
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
