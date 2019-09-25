var names = ["Ana", "Alex", "Brittany", 
"Reece", "Justin", "Deana", "BileeJane",
"Seth", "Sean", "Shelby", "Zachary",
"McKenzie", "Shyanne", "Luke"]

if (names.length % 2 != 0) {
    connsole.log("You must have an even number of names. You currently have " + names.length + " names.");
} else {
    var arr1 = names.slice(), // copy array
        arr2 = names.slice(); // copy array again

    arr1.sort(function() { return 0.5 - Math.random();}); // shuffle arrays
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
        var name1 = arr1.pop(), 
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();
            
        console.log(name1 + ' gets ' + name2);
    }
}

document.write(name1 + ' gets ' + name2);

//Done for the night
function nextPair(current, names) {
    var index = names.indexOf(current)
    if (index === names.length - 1) {
        return names[0]
    }
    return names[index = 1]
}

next.addEventListener('click', function() {
    var newSanta = nextPair(name1 + name2, names)
    (name1 + ' gets ' + name2) = newSanta
})


