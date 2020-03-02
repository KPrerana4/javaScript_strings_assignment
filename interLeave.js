function interLeave(string, separator)
{
    let characters = string.split('');
    return characters.join(separator);
}

console.log(interLeave("abc", ","));
console.log(interLeave("abc", ", "));
console.log(interLeave("12345", "-"));
console.log(interLeave("1234", "e&a"));
console.log(interLeave("", "x"));
console.log(interLeave(" 123", ","));