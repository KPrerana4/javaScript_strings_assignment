function countVowels(sentence)
{
    let characters = sentence.toUpperCase().split('');
    let vowels = characters.filter(isVowel);
    return vowels.length;
}

function isVowel(character)
{
    return "AEIOU".includes(character);
}

function main()
{
    console.log("Number of vowels : "+ countVowels("This is a sentence."));
}

main();