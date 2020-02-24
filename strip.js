function strip(string)
{
    string = removeLeadingSpaces(string);
    string = removeTrailingSpaces(string);
    return string;
}

function removeLeadingSpaces(string)
{
    for(let index = 0; index < string.length; index++){
        if(string[index] != ' '){
            return string.substring(index, string.length);
        }
    }
}

function removeTrailingSpaces(string)
{
    let index = string.length - 1;
    while(index >= 0 && string[index] == ' '){
        index--;
    }
    return string.substring(0, index + 1);
}

function main()
{
    let string = "   abcde     ";
    console.log("String after removing leading and trailing spaces :\"" + strip(string)+"\"");
    string = "    Abcdef";
    console.log("String after removing leading and trailing spaces :\"" + strip(string)+"\"");
}

main();