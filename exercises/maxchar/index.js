// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {

    char = {};
    let maxChar = str[0];

    for (let i of str) {

        if (char[i] === undefined) char[i] = 1;
        else {

            char[i]++;
            if (char[i] > char[maxChar]) maxChar = i; 
        }
    }

    return maxChar;

}
    maxChar("a");

    module.exports = maxChar;
