function camelCase(list)
{
    let string = list[0];
    for(let index = 1; index < list.length; index++)
    {
        let word = list[index];
        string += word[0].toUpperCase() + word.substring(1,word.length);
    }
    return string;
}

function main()
{
    let list = ["this", "is", "sentence"];
    console.log("Camel Case : " + camelCase(list));
}

main();