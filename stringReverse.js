function reverse(string)
{
    let stringReverse = "", stringLength = string.length;
    for(let index = stringLength - 1; index >= 0; index--)
    {
        stringReverse += string[index];
    }
    return stringReverse;
}

function main()
{
    let string = "madaM";
    console.log("Reverse of \"" + string + "\" is : " + reverse(string));
    string = "";
    console.log("Reverse of \"" + string + "\" is : " + reverse(string));
}

main();