function strikeOut(sentence, word)
{
    return sentence.split('').map(replace,word[0]).join('');
}

function replace(character)
{
    return character == this ? '-' : character;
}

console.log(strikeOut("hello fellow","l"));
console.log(strikeOut("hello","o"));
console.log(strikeOut("",""));
console.log(strikeOut("hello","hello"));