var names = ["Ana", "Alex", "Brittany", 
"Reece", "Justin", "Deana", "BileeJane",
"Seth", "Sean", "Shelby", "Zachary",
"McKenzie", "Shyanne", "Luke"]

var split = function(i, xs) {
    var a = xs.slice(0, i);
    var b = xs.slice(i, xs.length);
    return [a, b];
};

var shuffle = function(xs) {
    return xs.splice(0).sort(function() {
        return .5 - Math.random();
    });
};

var zip = function(xs) {
    return xs[0].map(function(_, i) {
        return xs.map(function(x) {
            return x[i];
        });
    });
}

var result = zip(split(names.length/2, shuffle(names)));

console.log(result);

