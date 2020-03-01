function countConsonants(sentence)
{
    let characters = sentence.toUpperCase().split('');
    return characters.filter(isConsonant).length;
}

function isConsonant(character)
{
    let isVowel, isAlphabet;
    isAlphabet = character >= 'A' && character <= 'Z';
    return isAlphabet && !("AEIOU".includes(character));
}

function main()
{
    let sentence = "this is a sentence.";
    console.log("consonants count:" + countConsonants(sentence));
}

main();