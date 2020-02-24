function checkPalindrome(string){
    let isPalindrome = true;
    for(let index = 0; index < string.length / 2 ; index++){
        if(string[index] != string[string.length - index -1]){
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

function main()
{
    let string = "madaM";
    console.log(string + " is Palindrome : " + checkPalindrome(string));
    string = "AbcbA";
    console.log(string + " is palindrome : " + checkPalindrome(string));
}

main();