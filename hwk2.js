// //1
// function number (num, digit) {
//   let i = 0;
//   let answer = 'no'
// while (i < num.length) {
//   if (digit === num[i]) {
//     answer = 'yes'
//   }
//   i++
// }
// return answer
// }
// console.log(number('2567', '7'))

// //2
// function reverse (num) {
//   let num2 = '';
//   while (num !== 0) {
//     let lastD = num % 10;
//     num2 += lastD;
//     num = (num - lastD) / 10;
//   }
//   return Number(num2);
// }
// console.log(reverse(895796))

// //3
// function difference (num) {
//   const sNum = '' + num;
//   let nummin = 9;
//   let nummax = 0;
//   for (let i = 0; i < sNum.length; i++) {
//     let currentD = +sNum[i];
//     if (currentD > nummax) nummax = currentD;
//     if (currentD < nummin) nummin = currentD;
//   }
//   return nummax - nummin
// }
// console.log(difference(5))

// //4
// function number(num) {
//   let result = 0;
//   let answer = 'no'
//   for ( let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       result++
//     }
//     if (result > 2) {
//       answer = 'yes'
//     }
//   } return answer
// }
// number(63)
// number(401)

// //5
// function game (player1, player2) {
//   if (player1 === 'paper' && player2 === 'paper') {
//     alert('Draw! Enter new values.')}
//   else if (player1 === 'rock' && player2 === 'rock') {
//     alert('Draw! Enter new values.')}
//   else if (player1 === 'scissors' && player2 === 'scissors') {
//     alert('Draw! Enter new values.')}
//   else if (player1 === 'scissors' && player2 === 'rock') {
//     alert('2nd player wins!')}
//   else if (player1 === 'scissors' && player2 === 'paper') {
//     alert('1st player wins!')}
//   else if (player1 === 'paper' && player2 === 'scissors') {
//     alert('2nd player wins!')}
//   else if (player1 === 'paper' && player2 === 'rock') {
//     alert('1st player wins!')}
//   else if (player1 === 'rock' && player2 === 'paper') {
//     alert('2nd player wins!')}
//   else if (player1 === 'rock' && player2 === 'scissors') {
//     alert('1st player wins!')}
//   else {alert('Invalid input, enter correct value.')}}
//   game('paper', 'rock')

//6
// function fibonacci (n) {
//    if (n<= 1) return n;
//    return fibonacci(n - 1) + fibonacci(n - 2);
// }
// console.log(fibonacci(10))

// //7
// function fibonacci(number) {
// let arr = new Array();
// for (let i=0; i<=number; i++) { 
// if (i <= 1) {
// arr[i] = i;
// continue;
// }
// arr[i] = arr[i-1] + arr[i-2];
// arr[i] <= number
// }
// console.log(arr);
// }
// fibonacci(8);

// //8
// function sequence (num) {
//   let result = 0;
//   let sign = true;
//   for (let i = 1; i <= num; i = i + 2) {
//     if (sign) {
//       result += 1/i
//     } else {
//       result -= 1/i
//     }
//     sign != sign;
//   }
//     return result;
// }
// console.log(sequence(7))

// //9 ??
// function combination (number) {
// let str = ['0','1','2','3','4','5','6','7','8','9'];
// for(let i = 0; i <= number; i++) {
// return (([i] + [str]));
// }};
// console.log(combination(8))

//10 i don't understand