// ! ! !
// Three Bugs
// line 67 took out the -1
// lines 43-44 parseInts added
// line 21 calculatesSTI(array) to calculatesSTI(array[1])

var atticus = {
  name: "Atticus",
  idNum: "2405",
  salary: "47000",
  reviewScore: 3,
}

var jem = {
  name: "Jem",
  idNum: "624347",
  salary: "63500",
  reviewScore: 4
}

var boo = {
  name: "Boo",
  idNum: "11435",
  salary: "54000",
  reviewScore: 3
}

var scout = {
  name: "Scout",
  idNum: "6243",
  salary: "74750",
  reviewScore: 5
}

// var arrayAtticus = ["Atticus", "2405", "47000", 3];
// var arrayJem = ["Jem", "62347", "63500", 4];
// var arrayBoo = ["Boo", "11435", "54000", 3];
// var arrayScout = ["Scout", "6243", "74750", 5];

// var array = [arrayAtticus, arrayJem, arrayBoo, arrayScout];
var array = [atticus, jem, boo, scout];

//Create variables used to write to the DOM
var newEl, newText, position;
//Capture the position of insertion into the DOM
position = document.getElementById('content');

//Loop the array, extracting each array and writing information to the DOM
//Note that the information is not 'clean'
for(var i = 0; i < array.length; i++){
	array[i] = calculateSTI(array[i]);
 	newEl = document.createElement('ul');
	newText = document.createTextNode(array[i].join(", "));
	newEl.appendChild(newText);
	position.appendChild(newEl);
}

function calculateSTI(array){
  var newArray = [];

  newArray[0] = array.name;

  var employeeNumber = array.idNum;
  var baseSalary = array.salary;
  var reviewScore = array.reviewScore;

  var bonus = getBaseSTI(reviewScore) + getYearAdjustment(employeeNumber) - getIncomeAdjustment(baseSalary);
  if(bonus > 0.13){
    bonus = 0.13;
  }

  newArray[1] = bonus;
  newArray[2] = parseInt(baseSalary * (1.0 + bonus));
  newArray[3] = parseInt(baseSalary * bonus);
  console.log(newArray[0] + ", " + newArray[1] + ", " + newArray[2] + ", " + newArray[3]);
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
  return basePercent;
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