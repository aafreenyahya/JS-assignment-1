///////////////Math Expressions////////////

// QUESTON 1
//////Addition///
var userInput1 = +prompt("enter 1st number");
var userInput2 = +prompt("enter 2st number");
var sum = userInput1 + userInput2;

document.write(" Sum of " + userInput1 + " and " + userInput2 + " is " + sum);


// QUESTON 2
/////Subtraction/////
var userInput1 = +prompt("enter 1st number");
var userInput2 = +prompt("enter 2st number");
var sum = userInput1 - userInput2;

document.write(" Subtract of " + userInput1 + " and " + userInput2 + " is " + sum);


/////Multiplication/////
var userInput1 = +prompt("enter 1st number");
var userInput2 = +prompt("enter 2st number");
var sum = userInput1 * userInput2;

document.write(" Multiplication of " + userInput1 + " and " + userInput2 + " is " + sum);


/////Division/////
var userInput1 = +prompt("enter 1st number");
var userInput2 = +prompt("enter 2st number");
var sum = userInput1 / userInput2;

document.write( " Division of " + userInput1 + " and " + userInput2 + " is " + sum);


/////module/////
var userInput1 = +prompt("enter 1st number");
var userInput2 = +prompt("enter 2st number");
var sum = userInput1 % userInput2;

document.write( " Module of " + userInput1 + " and " + userInput2 + " is " + sum);


// QUESTION 3
var name1 =
document.write("Value after variable declaration is" + " " + name1 + "</br>" );

var name1 = 6;
document.write("initial value:" + " " + name1 + "</br>");

var name1 = 6;
name1++;
document.write("Value after increament is" + " " + name1 + "</br>");

var name1 = 7;
name1+=6;
document.write(" Value after addition is" + " " + name1 + "</br>");

var name1 = 13;
name1--;
document.write(" Value after decrement is" + " " + name1 + "</br>");

var name1 = 12;
var remainder = name1 % 3; 
document.write("The Remainder is: " + remainder);


// QUESTION 4
var tickets = 5;
var price = 600;
var total = tickets * price;
document.write(" Total cost of buy" + " " + tickets + " " + "tickets to the park is" + " " + total + "PKR" + "</br>");


// QUESTION 5
// var tableof = 6;
document.write( tableof , " " , "x" , " " , "1" , " ", "=" , " ", tableof * 1 ,"</br>");
document.write( tableof , " " , "x" , " " , "2" , " ", "=" , " ", tableof * 2 ,"</br>");
document.write( tableof , " " , "x" , " " , "3" , " ", "=" , " ", tableof * 3 ,"</br>");
document.write( tableof , " " , "x" , " " , "4" , " ", "=" , " ", tableof * 4 ,"</br>");
document.write( tableof , " " , "x" , " " , "5" , " ", "=" , " ", tableof * 5 ,"</br>");
document.write( tableof , " " , "x" , " " , "6" , " ", "=" , " ", tableof * 6 ,"</br>");
document.write( tableof , " " , "x" , " " , "7" , " ", "=" , " ", tableof * 7 ,"</br>");
document.write( tableof , " " , "x" , " " , "8" , " ", "=" , " ", tableof * 8 ,"</br>");
document.write( tableof , " " , "x" , " " , "9" , " ", "=" , " ", tableof * 9 ,"</br>");
document.write( tableof , " " , "x" , " " , "10" , " ", "=" , " ", tableof * 10 ,"</br>");


// QUESTION 6
var tempcelsius = 37.5;
var tempfhtconvert = (tempcelsius * 9/5) + 32;
var tempfarenhiet = 98.4;
var tempcelsconvert = ( tempfarenhiet - 32) * 5/9

document.write( tempcelsius, ' °C' , ' ' , 'is' , ' ' , tempfhtconvert , ' °F' , '</br>')
document.write( tempfarenhiet, ' °F' ,' ' , 'is' , ' ' , tempcelsconvert , ' °C' , '</br>')



// QUESTION 7

var priceitem1 = 650;
var quantityitme1 = 3;
var priceitem2 = 100;
var quantityitem2 = 7;
var shippingcharges = 100;

var total = ( priceitem1 * quantityitme1) + (priceitem2 * quantityitem2) + 100;

document.write("Total cost of your order is" + " " + total + "</br");


// QUESTION 8

var totalmarks = 980;
var marksobtained = 804;
var total =( 804 / 980 ) * 100;
document.write(total + "%");


// QUESTION 9

var total = ( 10 * 104.80) + (25 * 28)
document.write( "Total Currency in PKR:" + " " + total);


// QUESTION 10
var total = ( 4 + 5 * 10) / 2
document.write("Total" + " " + total);

// QUESTION 11
var currentyear = 2024;
var birthyear = 1992;

var agethisyear = currentyear - birthyear;
var agenextyear = agethisyear;

document.write("Your age is: " + agethisyear + "</br>");


// QUESTION 12
var radius = 20;
var circumference = 2 * 3.142 * radius;
var area = 3.142 * radius * radius;
document.write( radius + "</br>");
document.write( circumference + "</br>");
document.write( area + "</br>");


// QUESTION 13
var favouritesnacks = "popitos";
var currentage = 15;
var maximamage = 65;
var amountperday = 3;
var totalage = (maximamage - currentage) ;
var totalsnacks = totalage * amountperday;
document.write( totalsnacks)