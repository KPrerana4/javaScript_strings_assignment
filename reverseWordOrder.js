function reverseWords(strings)
{
    let words = strings.split(" "), wordsReverse = "";
    for(let index = words.length - 1; index >= 0; index--){
        wordsReverse += words[index] + " ";
    }
    return wordsReverse;
}

console.log(reverseWords("This   is my name  "));