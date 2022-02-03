const greetings = 'Hello, My Country?';
function reverseString(text){
    let reverse = '';
            for (const letter of text){
               // console.log(letter);
                reverse = letter +reverse;
            }
            return reverse;
}
console.log(reverseString (greetings));