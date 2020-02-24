function reverseTheWord(word)
{
    let newString = "";
    for(let index = word.length - 1 ; index >= 0; index--)
    {
        newString += word[index];
    }
    return newString;
}

function reverseWordsCharacters(string)
{
    let words = string.split(' '), newString = "";
    for(let word of words)
    {
        newString += reverseTheWord(word) + " ";
    }
    return newString;
}

console.log(reverseWordsCharacters("This is My name *&%"));
console.log(reverseWordsCharacters(" This  is     My name *&%  "))
console.log(reverseWordsCharacters(" Abcd "));