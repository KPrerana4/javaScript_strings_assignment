function reverse(sentence)
{
    let sentenceReverse = "", sentenceLength = sentence.length;
    for(let index = sentenceLength - 1; index >= 0; index--)
    {
        sentenceReverse += sentence[index];
    }
    return sentenceReverse;
}

function main()
{
    let sentence = "madaM Hello";
    console.log("Reverse of \"" + sentence + "\" is : " + reverse(sentence));
    sentence = "";
    console.log("Reverse of \"" + sentence + "\" is : " + reverse(sentence));
}

main();