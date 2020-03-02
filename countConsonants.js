function countConsonants(sentence)
{
    return sentence.toUpperCase().split('').filter(isConsonant).length;
}

function isConsonant(character)
{
    let isAlphabet = character >= 'A' && character <= 'Z';
    return isAlphabet && !("AEIOU".includes(character));
}

function main()
{
    let sentence = "this is a sentence.";
    console.log("consonants count:" + countConsonants(sentence));
}

main();