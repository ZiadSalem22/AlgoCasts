// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

    debugger;

    //Take 1: change to string for reversing then parse it back
    // revN = parseInt(n.toString().split('').reverse().join(''));
    // return n < 0 ? revN * -1 : revN;

    //Take 2: using a Math.sign() metheod
    revN = parseInt(n.toString().split('').reverse().join(''));
    return revN * Math.sign(n);
}

module.exports = reverseInt;
