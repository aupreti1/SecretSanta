var names = ["Ana", "Alex", "Brittany", 
"Reece", "Justin", "Deana", "BileeJane",
"Seth", "Sean", "Shelby", "Zachary",
"McKenzie", "Shyanne", "Luke"]

function randomName(names) {
    return names[Math.floor(Math.random() * names.length)];
}

console.log(randomName(names));