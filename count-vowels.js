// Count the number of vowels in a string


// function countVowel(sentence){
//     let count = 0;
//     for(let i = 0; i <= sentence.length; i++){
//         let letter = sentence[i];
//         if(letter == "a" || letter == "e" || letter == "i" || letter ==  "o" || letter == 'u'){
//             count = count + 1;
//         }
//     }
//     return count;
// }
// let string = "Quick brown fox jumps over the lazy dog";
// console.log(countVowel(string));
// const getVowel = countVowel(string);
// console.log(getVowel);

function countVowel(sentence){
    let count = 0;
    let vowels = ["a", "e", "i", "o","u"]
    // for(const letter of sentence)
    for(let i = 0; i <= sentence.length; i++){
        let letter = sentence[i];
        if(vowels.indexOf(letter) != -1){
            count = count + 1;
        }
    }
    return count;
}
let string = "Quick brown fox jumps over the lazy dog";
console.log(countVowel(string));