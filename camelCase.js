function camelCase(words)
{
    let sentence = words[0];
    for(let index = 1; index < words.length; index++)
    {
        let word = words[index];
        sentence += word[0].toUpperCase() + word.slice(1).toLowerCase();
    }
    return sentence;
}

function getCamelCasedNotation(words)
{
    words[0] = words[0].toLowerCase();
    return words.reduce(function(camelCasedNotation, word){
        return camelCasedNotation + word[0].toUpperCase()+word.slice(1).toLowerCase();
    });
}

function main()
{
    let words = ["This", "iS", "a", "seNTence"];
    console.log("Camel Case : " + getCamelCasedNotation(words));
    console.log("Camel Case : " + camelCase(words));
}

main();