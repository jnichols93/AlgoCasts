// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    // Method 3 
    // turn string to array
    return str.split('').reduce((reversed, character)=> {
        return character + reversed;
    },'');
    // use reduce helper
    }

module.exports = reverse;

    // Method 1; using built in reverse method
        //     const arr = str.split('');
        //     arr.reverse();
        //     return arr.join('');

    // Method 1.5
        // return str
        // .split('')
        // .reverse()
        // .join('');++]

    //Method 2 
    //  create an empty string rev
    // const rev = '';
    // for each character in the provided string
    // for (let char of str){
    //      // take the char and add to front of list
    //     rev = char + rev
    // }
    //     // return rev
    //     return rev