function countVowels(sentence)
{
    let characters = sentence.toUpperCase().split('');
    let vowels = characters.filter(isVowel);
    return vowels.length;
}

function isVowel(character)
{
    if("AEIOU".includes(character)){
        return true;
    }
    return false;
}

function main()
{
    console.log("Number of vowels : "+ countVowels("This is a sentence."));
}

main();