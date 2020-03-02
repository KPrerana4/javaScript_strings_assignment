function reverse(word)
{
    if(word == '')
        return '';
    let characters = word.split('');
    return characters.reduceRight(function(reversedWord, character){
        return reversedWord + character;
    });
}

function reverseWordsCharacters(sentence)
{
    let words = sentence.split(" ");
    words[0] = reverse(words[0]);
    return words.reduce(function(string, word){
        return string + " " + reverse(word);
    });
}

console.log(reverseWordsCharacters("This is My name *&%"));
console.log(reverseWordsCharacters(" This  is     My name *&%  "))
console.log(reverseWordsCharacters("  Abcd "));
console.log(reverseWordsCharacters(""));