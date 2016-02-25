// ! ! !
// Three Bugs
function TheEmployee (firstName, numberofEmployee, employeeSalary, employeeRating) {
  this.firstName = firstName;
  this.numberofEmployee = numberofEmployee;
  this.employeeSalary = employeeSalary;
  this.employeeRating = employeeRating;
}
var atticus = new TheEmployee("Atticus", "2405", "47000", 3);
var jem = new TheEmployee("Jem", "62347", "63500", 4);
var boo = new TheEmployee("Boo", "11435", "54000", 3);
var scout = new TheEmployee("Scout", "6243", "74750", 5);

var array = [];

array.push(atticus, jem, boo, scout);
var object = array;

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < object.length; i++){
	object[i] = calculateSTI(object[i]);
 	newEl = document.createElement('li');
	newText = document.createTextNode(object[i]);
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(object){
  var newArray = [];
  newArray[0] = object.firstName;    //first bug is missing [i]s, check 2 more to go

  var employeeNumber = object.numberofEmployee;
  var baseSalary = object.employeeSalary;
  var reviewScore = object.employeeRating;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = Math.round(baseSalary * (1.0 + bonus));  //secondly added Math.round
  newArray[3] = Math.round(baseSalary * bonus);
  console.log(newArray[0] + " " + newArray[1] + " " + newArray[2] + " " + newArray[3]);
  return newArray;
}

function getBaseSTI(reviewScore){
  var basePercent;
  switch(reviewScore){
    case 1:
      basePercent = 0;
      break;
    case 2:
      basePercent = 0;
      break;
    case 3:
      basePercent = 0.04;
      break;
    case 4:
      basePercent = 0.06;
      break;
    case 5:
      basePercent = 0.10;
      break;
  }
  return basePercent;  //Took out the -1 for the 3rd bug!
}

function getYearAdjustment(employeeNumber){
  var yearAdjustment = 0;
  if(employeeNumber.length == 4){
    yearAdjustment = 0.05;
  }
  return yearAdjustment;
}

function getIncomeAdjustment(salary){
  var incomeAdjustment = 0;
  salary = parseInt(salary);
  if(salary > 65000){
    incomeAdjustment = 0.01;
  }
  return incomeAdjustment;
}