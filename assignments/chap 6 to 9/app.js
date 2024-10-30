////////////////Math Expression///////

// QUESTION 1
var a = 10;
document.write("Result: </br>");
document.write( "The value of a is:" + " " + a + " " + "</br>" );
document.write(".......................</br> </br>");

var a = ++a
document.write( "The value of ++a is:" + " " + a + " " + "</br>" );
document.write( " Now the value of a is:" + " " + a + " " + "</br> </br>" );

var b = a++
document.write( "The value of a++ is:" + " " + b + " " + "</br>" );
document.write( " Now the value of a is:" + " " + a + " " + "</br> </br>" );

var a = --a
document.write( "The value of --a is:" + " " + a + " " + "</br>" );
document.write( " Now the value of a is:" + " " + a + " " + "</br> </br>" );

var b = a--
document.write( "The value of a-- is:" + " " + b + " " + "</br>" );
document.write( " Now the value of a is:" + " " + a + " " + "</br> </br>" );


// QUESTION 2

var a = 2;
var b = 1;
           1  -  0  +  1  + 1
var result = --a - --b + ++b + b--
document.write( "a" + " " + "is:" + " " + 1 + "</br>");
document.write( "b" + " " + "is:" + " " + 0 + "</br>");
document.write("result is:" + " " + result + "</br>");


// QUESTION 3
var userInput = prompt("What is your name");
alert( "Hello!!" + " " + userInput + " " + "We are glad that you visit our site.")


//  QUESTION 4
 // Prompt the user to enter a number
 var input = prompt("Please enter a number for the multiplication table:");

 // If the user does not enter a number, use 5
 var number = input ? parseInt(input) : 5;

 // Display the multiplication table
 document.write("<h2>Multiplication Table of " + number + ":</h2>");
 for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

 //  QUESTION 5

var subject1 = prompt("Enter 1st Subject");
var subject2 = prompt("Enter 2st Subject");
var subject3 = prompt("Enter 3st Subject");

var totalmarks = 100;
var totallymarks = totalmarks * 3;

var obtainedmarksubject1 =+prompt( "Enter your 1st Subject Marks");
var obtainedmarksubject2 =+prompt( "Enter your 2st Subject Marks");
var obtainedmarksubject3 =+prompt( "Enter your 3st Subject Marks");

var percentage1 = (totalmarks / obtainedmarksubject1) *100;
var percentage2 = (totalmarks / obtainedmarksubject2) *100;
var percentage3 = (totalmarks / obtainedmarksubject3) *100;

var subjecttotalmarks = totalmarks * 3;
var totalobtainedmark = obtainedmarksubject1 + obtainedmarksubject2 + obtainedmarksubject3;
var percentage = (totalmarks / totalobtainedmark ) * 100;

document.write(`
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Subject</th>
            <th scope="col">TotalMarks</th>
            <th scope="col">ObtainedMarks</th>
            <th scope="col">Percentage</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">${subject1}</th>
            <td>${totalmarks}</td>
            <td>${obtainedmarksubject1}</td>
            <td>${percentage1}%</td>
          </tr>
          <tr>
            <th scope="row">${subject2}</th>
            <td>${totalmarks}</td>
            <td>${obtainedmarksubject2}</td>
            <td>${percentage2}%</td>
          </tr>
          <tr>
            <th scope="row">${subject3}</th>
            <td>${totalmarks}</td>
            <td>${obtainedmarksubject3}</td>
            <td>${percentage3}%</td>
          </tr>
        </tbody>
      </table>
    `)
    document.write(`<h4> Total Marks: ${totallymarks}, Obtained Marks: ${totalobtainedmark}, Percentage: ${percentage}% </h3>`)
