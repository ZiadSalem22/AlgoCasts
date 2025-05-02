// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

    //Take 1: using slpit, reverse and join
    // return str.split('').reverse().join('');



    //Take 2: empty string then append to the left
    //     let reverseStr = '';
    //     for ( let char of str)
    //     {
    //         reverseStr = char + reverseStr
    //     }
    //     return reverseStr; 

    //Take 3: array --> reduce --> string
    return str.split('').reduce((reversed, char) => char + reversed, '')


}

module.exports = reverse;
