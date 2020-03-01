function strip(sentence)
{
    if(sentence.length == 0){
        return sentence;
    }
    let firstNonWhiteSpace = removeLeadingSpaces(sentence);
    let lastNonWhiteSpace = removeTrailingSpaces(sentence);
    return sentence.slice(firstNonWhiteSpace, lastNonWhiteSpace);
}

function removeLeadingSpaces(sentence)
{
    let index = 0;
    while(index < sentence.length && sentence[index] == " ")
    {
        index++;
    }
    return index;
}

function removeTrailingSpaces(sentence)
{
    let index = sentence.length - 1;
    while(index >= 0 && sentence[index] == ' '){
        index--;
    }
    return index;
}

function main()
{
    let sentence = "   abcde     ";
    console.log("strip( \""+ sentence +"\"):\"" + strip(sentence)+"\"");
    sentence = "    Abcdef";
    console.log("strip( \""+ sentence +"\"):\"" + strip(sentence)+"\"");
    sentence = "           ";
    console.log("strip( \""+ sentence +"\"):\"" + strip(sentence)+"\"");
}

main();