"use strict";

function calculateMortgage() {
  let percent = window.percent.value;
  let contribution = window.contribution.value;
  let amount = window.amount.value;
  let date = window.date.value;
  let result = calculateTotalMortgage(percent, contribution, amount, date);
  let span = window.mortageResult;
  span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let todayDate = new Date();
  let data = new Date(date);
  let month = new Date((data.getFullYear() - todayDate.getFullYear()) * 12 + (data.getMonth() + 1) - (todayDate.getMonth() + 1));
  let monthlyInterestRate = (percent / 12) / 100;
  let monthlyFee = amount * (monthlyInterestRate + monthlyInterestRate / ((Math.pow((1 + monthlyInterestRate), month) - 1)));
  let totalAmount = monthlyFee * month + amount - contribution;
  console.log(totalAmount.toFixed(2));
  return totalAmount.toFixed(2);
}





function sayHello() {
  let name = window.personName.value;
  let greeting = getGreeting(name);
  let span = window.helloResult;
  span.textContent = greeting;
}

function getGreeting(name) {
  let user = new String(name);
  if (name === "" || name === null || name === undefined) {
    user = 'Аноним';
  } else {
    console.log('Привет, мир! Меня зовут ' + name);
  }
  return `Привет, мир! Меня зовут ${user}`;//Haisenberg :D
}