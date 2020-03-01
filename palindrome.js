function checkPalindrome(sentence)
{
    let characters = sentence.split('');
    let length = characters.length;
    return characters.slice(0,length/2).every(
                function(character, index){
                    return character == characters[length - index - 1];
                },characters);
}

function main()
{
    let sentence = "madam madaM";
    console.log(sentence + " is Palindrome : " + checkPalindrome(sentence));
    sentence = "AbbA";
    console.log(sentence + " is palindrome : " + checkPalindrome(sentence));
}

main();