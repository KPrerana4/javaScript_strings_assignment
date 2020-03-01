function countVowels(sentence){
    let vowelsCount = 0, vowels = 'AEIOU';
    for(let character of sentence.toUpperCase()){
      if(vowels.includes(character)){
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
    let sentence = "This is a sentence.";
    console.log("Number of vowels : "+ countVowels(sentence));
}

main();