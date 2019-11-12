"use strict";
//1 задача
function calculateQuadraticEquation(){
  let a = +window.a.value;
  let b = +window.b.value;
  let c = +window.c.value;
  let result = getResult(a,b,c);
  window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
  let span = window.result;
  span.textContent = "х = " + result;
};

function getResult(a,b,c){
    let d = Math.pow(b,2) - 4 * a * c;
    if (d < 0){
        let x = [];
        return x; 
    } else if(d == 0){
        let x = - b / (2 *a);
        return x;
    } else {
        let x = (- b + Math.sqrt(d))/ (2 *a);
        let x2 = (- b - Math.sqrt(d))/ (2 *a);
        return [x, ` x2= ${x2}`];   
    }
}
// 2 задача
function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
};

function getAverageMark(marks){
  let sum = 0;
  let averageMark = 0;

  if (marks.length > 5){
    console.log('Количество оценок больше 5');
    marks.splice(5);
  };

  for (let i = 0; i < marks.length; i ++){
  sum += marks[i];  
  };
  return sum / marks.length;
};
//3 задача
function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
};

function askDrink(name,dateOfBirthday){
	let yearOfBirth = dateOfBirthday.getFullYear();
	let FullYear = new Date().getFullYear();
	let DiffetenceAge = FullYear - yearOfBirth;
	let result = (DiffetenceAge >= 18) ? `Не желаете ли олд-фэшн, ${name}?` : `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
	console.log(result);
	return result;
};