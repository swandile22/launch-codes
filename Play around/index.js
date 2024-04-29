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

let testScore = "pizza";
let letterGrade;

switch(testScore) {
    case testScore >= 90:
        letterGrade = "A";
    break;

      case testScore >= 70:
        letterGrade = "B";
    break;

      case testScore >= 50:
        letterGrade = "C";
    break;

      case testScore >= 20:
        letterGrade = "E";
    break;

      case testScore < 20:
        letterGrade = "F";
    break;

    default: console.log(`${testScore} is not a valid test score`);
}

console.log(letterGrade)