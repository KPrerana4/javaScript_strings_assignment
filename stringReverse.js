function reverse(sentence)
{
    let sentenceReverse = "", sentenceLength = sentence.length;
    for(let index = sentenceLength - 1; index >= 0; index--)
    {
        sentenceReverse += sentence[index];
    }
    return sentenceReverse;
}

function getReverse(sentence)
{
    if(sentence == "")
        return sentence;
    let characters = sentence.split('');
    return characters.reduceRight(function(accumulator, character){
            return accumulator + character;
          });
}

function main()
{
    let sentence = "madaM Hello";
    console.log("Reverse of \"" + sentence + "\" is : " + reverse(sentence));
    console.log("Using reduceRight : " + getReverse(sentence));
    sentence = "";
    console.log("Reverse of \"" + sentence + "\" is : " + reverse(sentence));
    console.log("Using reduceRight : " + getReverse(sentence));
}

main();