function countVowels(string){
    let stringLength = string.length, vowelsCount = 0;
    string = string.toUpperCase();
    for(let char of string){
      if(char == 'A' || char == 'E' ||char == 'I' ||char == 'O' ||char == 'U'){
            vowelsCount++;
      }
    }
    return vowelsCount;
}

function countVowels(string)
{
    let regularExpression = /[A,E,I,O,U,a,e,i,o,u]/g;
    let vowels = string.match(regularExpression);
    return vowels.length;
}

function main()
{
    let string = "The quick brown fox jumps over the lazy dog. It barked.";
    let vowelsCount = countVowels(string);
    console.log("Number of vowels in string : " + vowelsCount);
}

main();