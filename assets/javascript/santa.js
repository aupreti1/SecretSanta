var names = ["Ana", "Alex", "Brittany", 
"Reece", "Justin", "Deana", "BileeJane",
"Seth", "Sean", "Shelby", "Zachary",
"McKenzie", "Shyanne", "Luke"]

var currentItemIndex = 14;
var myItemObjectArray = match;


if (names.length % 2 != 0) {
    console.log("You must have an even number of names. You currently have " + names.length + " names.");
} else {
    var arr1 = names.slice(), 
        arr2 = names.slice(); 

    arr1.sort(function() { return 0.5 - Math.random();}); 
    arr2.sort(function() { return 0.5 - Math.random();});

    while (arr1.length) {
        var name1 = arr1.pop(), 
            name2 = arr2[0] == name1 ? arr2.pop() : arr2.shift();

        var match = name1 + 'gets' + name2;

        console.log(name1 + ' gets ' + name2);
    }
}

document.write(name1);

function showPartner() {
  document.getElementById("name2").innerHTML = name2;
}

index = match.indexOf();
if(index >= 0 && index < match.length - 1)
   nextItem = match[index + 1]
   document.getElementById("match").innerHTML = match;
   




