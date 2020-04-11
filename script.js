'use strict';

let money, time;

function start() {
	money = +prompt('Ваш бюджет на месяц?', '50000');
	time = prompt('Введите дату в формате YYYY-MM-DD', '1998-05-03');

	while(isNaN(money) || money == '' || money == null) {
		money = +prompt('Ваш бюджет на месяц?', '50000');
	}
}

start();

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: true,
};

function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let requiredSpending = prompt('Введите обязательную статью расходов в этом месяце', '500');
		let spending = prompt('Во сколько обойдется?', '10000');
	
		if(typeof(requiredSpending) === 'string' && typeof(requiredSpending) != null && typeof(spending) != null &&requiredSpending != '' && spending != '' && requiredSpending.length < 50) {
			console.log('done');
			appData.expenses[requiredSpending] = spending;
		} else {
			i = i - 1;
		}
	}
}

chooseExpenses();

function detectDayBudget() {
	appData.moneyPerDay = (appData.budget / 30).toFixed();
	alert(`Ваш дневной бюджет: ${appData.moneyPerDay}`);
}

detectDayBudget();

function detectLevel() {
	if(appData.moneyPerDay < 100) {
		console.log('Минимальный уровень достатка');
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		console.log('Средний уровень достатка');
	} else if (appData.moneyPerDay > 2000) {
		console.log('Высокий уровень достатка');
	} else {
		console.log('Произошла ошибка');
	}
}

detectLevel();

function checkSavings() {
	if (appData.savings == true) {
		let save = +prompt('Какова сумма накоплений?', '25000'),
				percent = +prompt('Под какой процент?', '7');

				appData.monthIncome = (save / 100 / 12 * percent).toFixed();
				alert(`Доход в месяц с вашего депозита: ${appData.monthIncome} рублей`);
	}
}

checkSavings();

function chooseOptExpenses() {
	for (let i = 1; i < 4; i++) {
		let question = +prompt('Статья необязательных расходов?', '10000');

		appData.optionalExpenses[i] = question;
	}
}

chooseOptExpenses();