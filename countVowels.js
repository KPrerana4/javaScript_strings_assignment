function countVowels(sentence){
    let vowelsCount = 0;
    sentence = sentence.toUpperCase();
    for(let char of sentence){
      if(char == 'A' || char == 'E' ||char == 'I' ||char == 'O' ||char == 'U'){
            vowelsCount++;
      }
    }
    return vowelsCount;
}

function countVowels(sentence)
{
    let regularExpression = /[A,E,I,O,U,a,e,i,o,u]/g;
    let vowels = sentence.match(regularExpression);
    if(vowels == null){
        return 0;
    }
    return vowels.length;
}

function main()
{
    let sentence = "The quick brown fox jumps over the lazy dog. It barked.";
    console.log("Number of vowels in \"" +sentence+ "\":" + countVowels(sentence));
}

main();