// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// // solution 1 usign string functions 
// function reverse(str) {
//     return str.split("").reverse().join("");
// }

//using for loop
// function reverse(str) {

//     let reversedSring = '';

//     for (i = str.length - 1; i >= 0; i--){
//         reversedSring += str[i];
//     }

//     return reversedSring;

// }

// using spread [ES6]
// function reverse(str) {
//      let reversedSring = [...str].reverse().join("");
//     return reversedSring;
// }


// using recursion 

// function reverse(str) {

//     if (str === "")
//         return "";
//     else return reverse(str.substr(1)) + str.charAt(0);
// }

//using for of loop
// function reverse(str){
//     let reversedString = "";

//     for (let char  of str){
//         reversedString =  char + reversedString;
//     }

//     return reversedString;
// }


//using the reduce function
function reverse(str) {
    return str.split("").reduce((reversedString, char) => char + reversedString , "");



}
module.exports = reverse;
