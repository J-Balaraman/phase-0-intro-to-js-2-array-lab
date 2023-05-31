const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name)
{
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name)
{
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat(name)
{
    cats.pop(name);
    return cats;
}

function destructivelyRemoveFirstCat(name)
{
    cats.shift(name);
    return cats;
}

function appendCat(name)
{
    let name_1 = [...cats, name];
    return name_1;
}

function prependCat(name)
{
    let name_1 = [name, ...cats];
    return name_1;
}

function removeLastCat()
{
    let cats_1 = cats.slice(0,cats.length-1);
    return cats_1;
}

function removeFirstCat()
{
    let cats_1 = cats.slice(1);
    return cats_1;
}