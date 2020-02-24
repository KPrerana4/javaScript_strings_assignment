function checkPalindrome(string)
{
    let stringReverse = reverse(string);
    if(stringReverse == string)
    {
        return true;
    }
    return false;
}

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
    console.log(string + " is Palindrome : " + checkPalindrome(string));
    string = "AbcbA";
    console.log(string + " is palindrome : " + checkPalindrome(string));
}

main();