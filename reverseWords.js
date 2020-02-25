function reverseTheWord(word)
{
    let reverseWord = "";
    for(let index = word.length - 1 ; index >= 0; index--)
    {
        reverseWord += word[index];
    }
    return reverseWord;
}

function reverseWordsCharacters(sentence)
{
    let words = sentence.split(' '), newSentence = "";
    for(let word of words)
    {
        newSentence += reverseTheWord(word) + " ";
    }
    return newSentence;
}

console.log(reverseWordsCharacters("This is My name *&%"));
console.log(reverseWordsCharacters(" This  is     My name *&%  "))
console.log(reverseWordsCharacters(" Abcd "));