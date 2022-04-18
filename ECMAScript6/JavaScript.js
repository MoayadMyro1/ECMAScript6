let user = {
    name: "John",
    years: 30
}
var { name, years: age, isAdmin = false } = user;

console.log(name, age, isAdmin);

//Exercise 2
var visitor = 0;
const Planet = "Earth";
console.log(visitor, Planet);

//Exercise 3
let phrase = "Hello"

if (true) {
    let user = "John";
    function sayHi() {
        alert(`${phrase}, ${user}`)
    }
}

sayHi();
// Result is Hello, John because it is the value of phrase & user
//Exercise 4
let user2 = new Object();
user2.name = "John";
user2.surname = "Smith";
console.log(user2);
user2.name = "Pete";
console.log(user2);
delete user2.name;
console.log(user2);
//Exercise 5
const user = {
    name: "John"
}

// does it work? yes because we do not change the object we change his property
user.name = "Pete";
//Exercise 6
let salaries = {
    Fred: 100,
    Ted: 160,
    Ghaith: 130
}
//method 1 
var sum = 0;
for (let value in salaries) {
    sum += salaries[value];
}
if (sum === "" || sum === undefined) { sum = 0; }
console.log(sum);
//method 2 
console.log(Object.values(salaries).reduce((a, b) => a + b, 0));
//Exercise 7
let a = 0, b = 1;
if (a + b < 4) {
    result = 'Below';
} else {
    result = 'Over';
}
a + b < 4 ? 'Below':'Over'
//Exercise 8
let message, login;

if (login == 'Employee') {
    message = 'Hello';
} else if (login == 'Director') {
    message = 'Greetings';
} else if (login == '') {
    message = 'No login';
} else {
    message = '';
}

login == 'Employee' ? message = 'Hello' : login == 'Director' ? message = 'Greetings' : login == '' ? message = 'No login' : message = '';

//Functions
//Exercise 1
function checkAge(age) {
    if (age > 18) {
        return true;
    } else {
        return confirm('Do you have your parents permission to access this page?');
    }
}
const checkAge = age => age > 18 ? true : confirm('Do you have your parents permission to access this page?');
//Exercise 2
const pow = (x, n) => Math.pow(x, n);
// Exercise 3
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}
const ask = (question, yes, no) => confirm(question) ? yes() : no();
ask(
    "Do you agree?",
    function () { alert("You agreed.") },
    function () { alert("You canceled the execution.") }
)
//Exercise 4
let calculator = {
    x: 0,
    y: 0,
    read: function () { x = parseInt(prompt("Please enter your first value", "Harry Potter")); y = parseInt( prompt("Please enter your y value", "Harry Potter")); },
    sum: function () {
        return x + y;
    },
    mul: function () { return x * y; }
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
//Exercise 5
const min = (a, b) => a > b ? a : b;
//Array
//Exercise 1
let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
function filterRange(ar, a, b)
{
    let array = new Array();
    
    for (let i = 0; i <= ar.length; i++)
    {
        if (ar[i] >= a && ar[i] <= b)
        {
            array.push(ar[i]);
        }
    }

    return array;
}
alert(filtered)  // 3,1 (matching values)
alert(arr)      // 5,3,8,1 (not modified)

//Exercise 2
let john = { name: "John", age: 25 }
let pete = { name: "Pete", age: 30 }
let mary = { name: "Mary", age: 28 }
let users = [john, pete, mary];
let names = users.map(x => x.name);

    alert(names) // John, Pete, Mary
//Exercise 3
function getAverageAge(arr)
{
    let ages = users.map(x => x.age);
    let rslt = "( ",tot = 0;
    for (let i = 0; i < ages.length; i++)
    {
        tot += parseInt(ages[i]);
        rslt += ages[i] ; 
        if (i < ages.length -1) { rslt += " + ";}
    }
    rslt += ")/ " + ages.length + " = " + tot / ages.length;
    return rslt;
}
alert(getAverageAge(arr))   // (25 + 30 + 29) / 3 = 28