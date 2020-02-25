function checkPalindrome(sentence){
    let isPalindrome = true;
    for(let index = 0; index < sentence.length / 2 ; index++){
        if(sentence[index] != sentence[sentence.length - index -1]){
            isPalindrome = false;
            break;
        }
    }
    return isPalindrome;
}

function main()
{
    let sentence = "madam madaM";
    console.log(sentence + " is Palindrome : " + checkPalindrome(sentence));
    sentence = "AbcbA";
    console.log(sentence + " is palindrome : " + checkPalindrome(sentence));
}

main();