// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const data = 25;

// if (data === 25) console.log("yes");

// const calcAge = (birthYear) => 2021 - birthYear;

// const array = [
//   { title: "Python", score: 16 },
//   { title: "Java", score: 9 },
// ];

// let maxObj = array.reduce((max, obj) => (max.score > obj.score ? max : obj));

// console.log(maxObj);

// let arr = [];

// function tournamentWinner(competitions, results) {
//   // Write your code here.
//   for (let i = 0; i < results.length; i++) {
//     let obj = {
//       title: "",
//       score: 0,
//     };
//     if (results[i] === 0) {
//       obj = {
//         title: competitions[i][1],
//         score: 3,
//       };
//     } else {
//       obj = {
//         title: competitions[i][0],
//         score: 3,
//       };
//     }
//     if (checkObj(obj) >= 0) {
//       let idx = checkObj(obj);
//       arr[idx].score += 3;
//     } else if (checkObj(obj) === -1) {
//       arr.push(obj);
//     }
//   }

//   if (arr.length) {
//     const maxObj = arr.reduce((max, obj) =>
//       max.score > obj.score ? max : obj
//     );

//     return maxObj.title;
//   }
// }

// function checkObj(obj) {
//   for (let i = 0; i < arr.length; i++) {
//     if (obj.title === arr[i].title) return i;
//   }
//   return -1;
// }

// const competitions = [
//   ["HTML", "Java"],
//   ["Java", "Python"],
//   ["Python", "HTML"],
// ];

// const results = [0, 1, 1];

// console.log(tournamentWinner(competitions, results));

// function threeNumberSum(array, targetSum) {
//   // Write your code here.
//   let result = [];
//   array.sort((a, b) => a - b);
//   console.log(array);
//   for (let i = 0; i < array.length; i++) {
//     let twoNumberSum = targetSum - array[i];
//     let twoLeft = i + 1;
//     let twoRight = array.length - 1;

//     if (twoRight > 0 && twoLeft > 0) {
//       while (array[twoRight] > array[twoLeft]) {
//         if (twoNumberSum === array[twoLeft] + array[twoRight]) {
//           let triplets = [];

//           triplets[0] = array[i];
//           triplets[1] = array[twoLeft];
//           triplets[2] = array[twoRight];
//           console.log(triplets);

//           result.push(triplets);

//           twoRight--;
//           twoLeft++;
//         } else if (twoNumberSum > array[twoLeft] + array[twoRight]) {
//           twoLeft++;
//         } else {
//           twoRight--;
//         }
//       }
//     }
//   }
//   return result;
// }

// const array = [12, 3, 1, 2, -6, 5, -8, 6];

// const targetSum = 0;
// console.log(threeNumberSum(array, targetSum));

function nonConstructibleChange(coins) {
  // Write your code here.
  coins.sort((a, b) => a - b);
  let sum = 1;

  if (coins.length === 1 && coins[0] >= 2) {
    return sum;
  } else {
    for (let i = 0; i < coins.length; i++) {
      sum += coins[i];

      if (sum < coins[i + 1]) {
        break;
      }
    }
    return sum;
  }
}

const coins = [6, 4, 5, 1, 1, 8, 9];

console.log(nonConstructibleChange(coins));
