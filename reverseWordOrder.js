function reverseWords(sentence)
{
    let words = sentence.split(" ");
    return words.reduceRight(function(sentence, word){
        return sentence + " " + word;
    });
}

console.log(reverseWords("  This   is my name  "));
console.log(reverseWords(""));
console.log(reverseWords(" Abcd "));
