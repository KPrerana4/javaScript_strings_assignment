function frequency(sentence, text)
{
    let words = sentence.split(" ");
    return words.filter(function(word){
        return word == text;
    }).length;
}

console.log(frequency("hello world","hello"));
console.log(frequency("hello world","world"));
console.log(frequency("hello hello","hello"));
console.log(frequency("hello Hello","Hello"));
console.log(frequency("hellohello Hello","hello"));