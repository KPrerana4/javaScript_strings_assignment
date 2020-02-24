function countConsonants(string){
    let consonantsCount = 0;
    string = string.toUpperCase();
    for(let char of string){
        if(checkConsonant(char)){
            consonantsCount++;
        }
    }
    return consonantsCount;
}

function checkConsonant(char)
{
    let isVowel, alphabetCheck;
    alphabetCheck = char >= 'A' && char <= 'Z';
    isVowel = char == 'A' ||char == 'E' ||char == 'I' ||char == 'O' ||char == 'U';
    return alphabetCheck && !isVowel;
}

function main()
{
    let string = "The quick brown fox jumps over the lazy dog. It barked.";
    let consonantsCount = countConsonants(string);
    console.log("Number of consonants : " + consonantsCount);
}

main();