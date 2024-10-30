//////////////////Arrays///////////

// // QUESTION 1

var studentsname = [];

// // QUESTION 2

var studentsname = [];

// // QUESTION 3

var animals = ["lion" , "cat" , "dog" , "sheep" , "ostrich"];

// // QUESTION 4

var countings =[1 , 3 , 5 , 7 , 9];

// // QUESTION 5

var boolean =[true , true , false , true , false];

// // QUESTION 6

var mixed = ["saba" , 21 , "enter" , true];

// // QUESTION 7

var qualificationsInPak = ["SSC" , "HSC" , "BCS" , "BS" , "BCOM" , "MS2" , "M.PHIL" , "PHD"];
document.write(`
     <h1>Qualification</h1>
     </br>
     ${qualificationsInPak}
     </br>
     </br>
     </br>
    `)


//     // QUESTION 8

var names = ["sana" , "shifa" , "shaista"];
var score = [380 , 400 , 250];
var total = 500;

var percentageSana = (score [0] / total) * 100;
var percentageShifa = (score [1] / total) * 100;
var percentageShaista = (score [2] / total) * 100;

document.write("Score of" + " " + names[0] +" " + "is" + " " + score[0] + "." +" " + "Percentage:" + percentageSana + "%" + "</br>");
document.write("Score of" + " " + names[1] +" " + "is" + " " + score[1] + "." +" " + "Percentage:" + percentageShifa + "%" + "</br>");
document.write("Score of" + " " + names[2] +" " + "is" + " " + score[2] + "." +" " + "Percentage:" + percentageShaista + "%" + "</br>" + "</br>" + "</br>");


//     // QUESTION 9

var color = ["pink" , "grey" , "yellow" , "purple" , "blue"];
document.write(color + "</br>");

var userinput = prompt("What color would you like to add to the begning fo the array?");
color.unshift(userinput);
document.write(color + "</br>");


var userinput2 = prompt("What color would you like to add to the end fo the array?")
color.push(userinput2);
document.write(color + "</br>");

color.unshift("black");
color.unshift("white");
document.write(color + "</br>" + "</br>");

color.shift()
document.write(color + "</br>");

color.pop()
document.write(color + "</br>" + "</br>");

var userindex =+prompt("At which index would you like to add color?");
var usercolor = prompt("Which color would you like to add?");
color.splice(userindex , 0 , usercolor);
document.write("The new array after add color add from user" + " " + color + "</br>" + "</br>");


var userindex =+prompt("At which index would you like to remove color?");
var userdeletecolor = prompt("Which colo would you like to remove?");
var userresult = color.splice(userindex, userdeletecolor);
document.write("The new array after delete color from user" + " " + color);
document.write(" the delete color are" , " " + color);



//     // QUESTION 10

var score = [320 , 230 , 480 , 120];
score.sort();
document.write(score + "</br>" + "</br>" );

//     // QUESTION 11

var citiesname = ["karachi" , "lahore" , "islamabad" , "quetta", "peshawar" , "skardu" , "muree"];
document.write(`  
    <h2> Cities Names</h2>
    ${citiesname}
    `)
var selectedcities = [citiesname[3] , citiesname[5] , citiesname[6]];
document.write(`  
    <h2> Selected Cities Names</h2>
    ${selectedcities}
    `)


//   // QUESTION 12

var legall = ["This" , "is" , "my" , "Cat"];
var result1 = legall.join();
document.write(result1 + "</br>" + "</br>");
var result2 = legall.join(" ");
document.write(result2);


  // QUESTION 13

  var newarray = ["keyboard" , "mouse" , "printer" , "moniter"];
  document.write(newarray +"</br>");

  var firstValue = newarray.shift();
  document.write(firstValue + "<br>");

  var secondValue = newarray.shift();
  document.write(secondValue + "<br>");

  var thirdValue = newarray.shift();
  document.write(thirdValue + "<br>");

  var fourthValue = newarray.shift();
  document.write(fourthValue + "<br>");

  // QUESTION 14

  var newarray = ["keyboard" , "mouse" , "printer" , "moniter"];
  document.write(newarray +"</br>");

  var firstValue = newarray.pop();
  document.write(firstValue + "<br>");

  var secondValue = newarray.pop();
  document.write(secondValue + "<br>");

  var thirdValue = newarray.pop();
  document.write(thirdValue + "<br>");

  var fourthValue = newarray.pop();
  document.write(fourthValue + "<br>");

  // QUESTION 15

var mobilearray = ["Apple" , "Sumsung" , "Motrola" , "Nokia" , "Sony" , "Heir"];
document.write(`
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Dropdown button
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Apple</a></li>
          <li><a class="dropdown-item" href="#">Samsung</a></li>
          <li><a class="dropdown-item" href="#">Motrola</a></li>
          <li><a class="dropdown-item" href="#">Nokia</a></li>
          <li><a class="dropdown-item" href="#">Sony</a></li>
          <li><a class="dropdown-item" href="#">Heir</a></li>
        </ul>
      </div>
  `)





