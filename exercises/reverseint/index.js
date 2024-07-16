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

    // const rs = n.toString().split("").reverse().join("");

    // if (n<0) return -1 * parseInt(rs);

    // return parseInt(rs);



    // const rs = n.toString().split("").reverse().join("");

    // if (Math.sign(n)=== -1) return -1 * parseInt(rs);

    // return parseInt(rs);

    let rs = n.toString().split("").reverse().join("");
    
    return n > -1  ? parseInt(rs) : -1 * parseInt(rs);
}



module.exports = reverseInt;
