var names = ["Ana", "Alex", "Brittany", 
"Reece", "Justin", "Deana", "BileeJane",
"Seth", "Sean", "Shelby", "Zachary",
"McKenzie", "Shyanne", "Luke"]

function spin() {
    if(names.length == 0) {
        alert("All Names Have Been Matched!!");
        generateNumbers();
    }
    var random = Math.floor(Math.random() * names.length);
    var num = names[random];
    names.splice(random, 1);
    document.getElementById("names").innerHTML = num;
}