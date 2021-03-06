function countUniqueLetters(sentence)
{
    let uniqueLetters = [];
    for(let char of sentence.toUpperCase()){
        if(isAlphabet(char) && !checkIfExists(char, uniqueLetters)){
            uniqueLetters.push(char);
        }
    }
    return uniqueLetters.length;
}

function isAlphabet(char)
{
    return char >= 'A' && char <= 'Z';
}

function checkIfExists(char, uniqueLetters)
{
    return uniqueLetters.includes(char);
}

function main()
{
    let sentence = 'This is a sentence';
    console.log("unique letters count : " + countUniqueLetters(sentence));
}

main();