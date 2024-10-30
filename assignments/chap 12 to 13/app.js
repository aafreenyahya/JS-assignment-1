/////////////If....Else and Else if Statement Testing set of Conditions//////

// QUESTION 1







// QUESTION 2

var num1 = prompt("Enter 1st Num.....");
var num2 = prompt("Enter 2st Num.....");

if(num1 > num2){
alert( num1 + " " + "is greater than" + " " + num2);
}
else if(num1 < num2){
    alert( num1 + " " + "is less than" + " " + num2);
}
else if(num1 === num2){
    alert( num1 + " " + "is equal to" + " " + num2);
}

// QUESTION 3

var usernum =+prompt("Enter a number");

if(usernum >= 1){
    alert("This is Positive Number")
}
else if(usernum <= -1){
    alert("This is Negative Number")
}
else{
    alert("TThe Number is Zero")
}


// QUESTION 4

var enterword = prompt("Enter a Vowel Charcter"); 

if(enterword === "a" || enterword === "e" || enterword === "i" || enterword === "o" || enterword === "u" ){
    alert("True")
}
else{
    alert("False")
}

// QUESTION 5

var pass = "abc405@gmail.com";
var inputpass =prompt("Enter you Password");

if(inputpass === pass){
    alert("Correct!! The Password you entered matches the original password")
}

else{
    alert("Please Enter your Password");
}


// QUESTION 6

var greeting;
var hour =prompt("Enter the hour (0 - 23)");

if(hour < 18){
alert( greeting = "Good Day!")
}
else{
    alert( greeting = "Good Evening!")
}


// QUESTION 7

var time =prompt("enter time using 24 hours format... like (1900 = 7pm)");

if( time >= 0  && time < 1200){
alert("Good Morning!!")
}
else if( time >= 1200 && time < 1700 ){
    alert("Good AfterNoon!!")
}
else if( time >= 1700 && time < 2100 ){
    alert("Good Evening!!")
}
else{
    alert("Good Night!!")
}