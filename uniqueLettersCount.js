function countUniqueLetters(string)
{
    let uniqueLetters = [];
    for(let char of string.toUpperCase()){
        if(isAlphabet(char) && checkIfExists(char, uniqueLetters)){
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
    for(element of uniqueLetters)
    {
        if(element == char)
        {
            return false;
        }
    }
    return true;
}

function main()
{
    let string = 'This is a sentence';
    console.log("unique letters count : " + countUniqueLetters(string));
}

main();