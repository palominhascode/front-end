//Palindrome Checker exercise

// store values for a palindrome and a nonpalindrome to make sure function works as intended

let palindrome = 'Eva, can I see bees in a cave?';
//test with 'Was it a car or a cat I saw'

let nonPalindrome = 'Cash rules everything around me';

//declare function

function checkIfPalindrome (string) {

    //make string lower case
    //filter out special characters
    let stringLower = string.toLowerCase();
    let stringLowerSanitized = stringLower.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');

    //turn string into an array
    //filter spaces out of array
    const arr = stringLowerSanitized.split(' ').join('').split('');

    //create new strings to compare
    const newString = arr.toString();
    const newStringReverse = arr.reverse().toString();

    /* Compare the original array with its reversed form
    and then display a message for if the argument is a palindrome
    and for if it isn't */

    if (newString === newStringReverse) {
        console.log('This is a palindrome.');
    }
        else {
            console.log('This is not a palindrome.');
        };
}

//Test function

checkIfPalindrome(palindrome);
checkIfPalindrome(nonPalindrome);