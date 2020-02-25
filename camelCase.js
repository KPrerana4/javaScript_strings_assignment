function camelCase(words)
{
    let sentence = words[0];
    for(let index = 1; index < words.length; index++)
    {
        let word = words[index];
        sentence += word[0].toUpperCase() + word.substring(1,word.length);
    }
    return sentence;
}

function main()
{
    let words = ["this", "is", "sentence"];
    console.log("Camel Case : " + camelCase(words));
}

main();