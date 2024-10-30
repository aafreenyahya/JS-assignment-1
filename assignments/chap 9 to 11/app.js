/////////////////User Input and Conditional Statement////////////////////////

// QUESTION 1

var usercity = prompt(" Hello!! What's your City Name??");

if( usercity === "karachi"){
  alert( "Welcome The City of Lights.")
}


// QUESTION 2

 var usergender = prompt("What is your gender?");

if (usergender === "male") { 
     alert("Good Morning Sir.");
 } else if (usergender === "female") { 
  alert("Good Morning Ma'am");
} 


// QUESTION 3
var userinput =prompt(" Enter the color of the traffic signal (red, yellow, green):");

if( userinput === "red"){ 
     alert(" Must Stop")
} 
else if( userinput === "yellow"){ 
    alert("Ready to Move")
}
else if( userinput === "green"){
   alert("Move now")
}


// QUESTION 4

var feul =+prompt("Enter the remining feul in the car in liters.");

if( feul <= 0.25){
    alert("Please refill the feul in the car")
}
else{ 
alert( "you have feul")
}


// QUESTION 5

var a = 4
if( ++a === 5){
alert("given condition of variable a is true")
document.write("given condition of variable a is true </br>" )
}

var b = 82
if(b++ === 83){
    alert("given condition of variable b is true")
    document.write("given condition of variable b is true </br>" )
}

var c = 12
if(c++ === 13){
    alert("condition 1 is true")
    document.write("condition 1 is true </br>" )
}

if( c === 13){
    alert("condition 2 is true")
    document.write("condition 2 is true </br>" )
}

if( ++c < 14){
    alert("condition 3 is true")
    document.write("condition 3 is true </br>" )
}

if(c === 14){
    alert("condition 4 is true")
    document.write("condition 4 is true </br>" )
}

var materialcost = 2000;
var labourcost = 2000;
var totalcost = materialcost + labourcost;
if( totalcost === materialcost + labourcost ){
alert("The cost is equal")
document.write("The cost is equal </br>")
}

if(true){
    alert("true")
    document.write("true </br>")
}

if("car" < "cat"){
    alert("Car is smaller then cat")
    document.write("Car is smaller then cat </br>")
}



// QUESTION 6

var enternum1 =+prompt("Enter your Math Marks");
var enternum2 =+prompt("Enter your Chemistry Marks");
var enternum3 =+prompt("Enter your Physics Marks");
var totalenternum = (enternum1 + enternum2 + enternum3);

var totalnum = 100 * 3;

var percentage1 = (enternum1 / totalnum)*100;
var percentage2 = (enternum2 / totalnum)*100;
var percentage3 = (enternum3 / totalnum)*100;
var totalpercentage = (percentage1 + percentage2 + percentage3)

if(totalpercentage >= 80){
    document.write(`<h1>Mark Sheet</h1>
    </br>
    </br>
    <h3>Total marks : ${totalnum}</h3>
    <h3>Marks Obtained : ${totalenternum}</h3>
    <h3>Percentage : ${totalpercentage}%</h3>
    <h3>Grade : A-one</h3>
    <h3>Remarks : Excellent</h3>
    `)
}
else if(totalpercentage >= 70){
    document.write(`<h1>Mark Sheet</h1>
        </br>
        </br>
        <h3>Total marks : ${totalnum}</h3>
        <h3>Marks Obtained : ${totalenternum}</h3>
        <h3>Percentage : ${totalpercentage}%</h3>
        <h3>Grade : A</h3>
        <h3>Remarks : Good</h3>
        `)
 }
 else if(totalpercentage >= 60){
    document.write(`<h1>Mark Sheet</h1>
        </br>
        </br>
        <h3>Total marks : ${totalnum}</h3>
        <h3>Marks Obtained : ${totalenternum}</h3>
        <h3>Percentage : ${totalpercentage}%</h3>
        <h3>Grade : B</h3>
        <h3>Remarks : You need to improve</h3>
        `)
 }
else{
    alert("Fail")
}




// QUESTION 7


var num = 8;
var inputnum =+prompt("Guess the number 1 till 10");

if(num === inputnum){
    alert("Bingo!Correct answer")
}
else if(inputnum >= num - 1 && inputnum <= num + 1){
    alert("Close enough to the correct answer")
}

else{
    alert("wrong!!!")
}


// QUESTION 8

var inputNum = +prompt("Enter a number");

if (inputNum % 3 === 0) {
    alert("The number " + inputNum + " is divisible by 3.");
} else {
    alert("The number " + inputNum + " is not divisible by 3.");
}


// QUESTION 9

var usernum =+prompt("Enter a number...");

if(usernum % 2 === 0){
    alert("Even Number")
}
else{
    alert("Odd Number")
}


// QUESTION 10

var usertemp =+prompt("Enter the Temperature according to your criteria");

if(usertemp >= 40){
    alert("It is too hot outside")
}
else if(usertemp >= 30){
    alert("The Weather today is normal")
}
else if(usertemp >= 20){
    alert("Today's Weather is cold")
}
else if(usertemp >= 10){
    alert(" OMG!! Today's Weather is so cold")
}


// QUESTION 11

var num1 =+prompt("Enter 1st Num....");
var num2 =+prompt("Enter 2st Num....");
var operators =prompt("Enter an Operater(+ , - , * , / , %)");
var total;

if(operators === "+"){
    total = num1 + num2; 
}
 else if(operators === "-"){
    total = num1 - num2; 
}
else if(operators === "*"){
    total = num1 * num2; 
}
else if(operators === "/"){
    total = num1 / num2; 
}
else if(operators === "%"){
    total = num1 % num2; 
}
else{
    document.write("Invalid Operator")
}
document.write("Total: " + total)








