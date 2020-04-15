'use strict';

let startBtn = document.getElementById('start'),

		budgetValue = document.querySelector('.budget-value'),
		dayBudgetValue = document.querySelector('.daybudget-value'),
		levelValue = document.querySelector('.level-value'),
		expensesValue = document.querySelector('.expenses-value'),
		optionalExpensesValue = document.querySelector('.optionalexpenses-value'),
		incomeValue = document.querySelector('.income-value'),
		monthSavingsValue = document.querySelector('.monthsavings-value'),
		yearSavingsValue = document.querySelector('.yearsavings-value'),

		expensesItems = document.querySelectorAll('.expenses-item'),

		buttons = document.querySelectorAll('button'),
		expensesItemBtn = buttons[0],
		optionalExpensesBtn = buttons[1],
		countBudgetBtn = buttons[2],

		optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),

		income = document.querySelector('#income'),
		savings = document.querySelector('#savings'),
		sumItem = document.querySelector('#sum'),
		percentItem = document.querySelector('#percent'),
		yearValue = document.querySelector('.year-value'),
		monthValue = document.querySelector('.month-value'),
		dayValue = document.querySelector('.day-value');

let money, time;

expensesItemBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function() {
	time = prompt('Введите дату в формате YYYY-MM-DD', '1998-05-03');
	money = +prompt('Ваш бюджет на месяц?', '50000');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '50000');
	}
	appData.budget = money;
	appData.timeData = time;
	budgetValue.textContent = money.toFixed();
	yearValue.value = new Date(Date.parse(time)).getFullYear();
	monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
	dayValue.value = new Date(Date.parse(time)).getDate();

	expensesItemBtn.disabled = false;
	optionalExpensesBtn.disabled = false;
	countBudgetBtn.disabled = false;
});

expensesItemBtn.addEventListener('click', function() {
	let sum = 0;

	for (let i = 0; i < expensesItems.length; i++) {
		let requiredSpending = expensesItems[i].value;
		let spending = expensesItems[++i].value;
	
		if(typeof(requiredSpending) === 'string' && typeof(requiredSpending) != null && typeof(spending) != null &&requiredSpending != '' && spending != '' && requiredSpending.length < 50) {
			console.log('done');
			appData.expenses[requiredSpending] = spending;
			sum += +spending;
		} else {
			i = i - 1;
		}
	}
	expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function(){
	for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
		appData.optionalExpenses[i] = opt;
		optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBudgetBtn.addEventListener('click', function(){

	if (appData.budget != undefined) {
		appData.moneyPerDay = ((appData.budget - expensesValue.innerHTML) / 30).toFixed();
		dayBudgetValue.textContent = appData.moneyPerDay;
	
		if(appData.moneyPerDay < 100) {
			levelValue.textContent = 'Минимальный уровень достатка';
		} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
			levelValue.textContent = 'Средний уровень достатка';
		} else if (appData.moneyPerDay > 2000) {
			levelValue.textContent = 'Высокий уровень достатка';
		} else {
			levelValue.textContent = 'Произошла ошибка';
		}
	} else {
		dayBudgetValue.textContent = 'Произошла ошибка';
	}
});

income.addEventListener('input', function(){
	let items = income.value;

	if (typeof(items) == 'string' || items != '' || typeof(items) != null) {
		appData.income = items.split(', ');
	}

	incomeValue.textContent = appData.income;
});

savings.addEventListener('click', function(){
	if (appData.savings == true) {
		appData.savings = false;
	} else {
		appData.savings = true;
	}
});

sumItem.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = +sumItem.value,
				percent = +percentItem.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed();
		appData.yearIncome = (sum / 100 * percent).toFixed();

		monthSavingsValue.textContent = appData.monthIncome;
		yearSavingsValue.textContent = appData.yearIncome;
	}
});

percentItem.addEventListener('input', function(){
	if (appData.savings == true) {
		let sum = +sumItem.value,
				percent = +percentItem.value;

		appData.monthIncome = (sum / 100 / 12 * percent).toFixed();
		appData.yearIncome = (sum / 100 * percent).toFixed();

		monthSavingsValue.textContent = appData.monthIncome;
		yearSavingsValue.textContent = appData.yearIncome;
	}
});

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};