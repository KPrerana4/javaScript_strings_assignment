function countConsonants(sentence){
    let consonantsCount = 0;
    sentence = sentence.toUpperCase();
    for(let char of sentence){
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
    let sentence = "The quick brown fox jumps over the lazy dog. It barked.";
    let consonantsCount = countConsonants(sentence);
    console.log("consonants count(in \"" +sentence+ "\"):" + consonantsCount);
}

main();