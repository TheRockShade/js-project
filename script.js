'use strict';

let money = prompt('Ваш бюджет на месяц?', '50000');
let time = prompt('Введите дату в формате YYYY-MM-DD', '1998-05-03');
let requiredSpending = prompt('Введите обязательную статью расходов в этом месяце', '500');
let spending = prompt('Во сколько обойдется?', '10000');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

appData.expenses[requiredSpending] = spending;

let dayBudget = Math.round(appData.budget / 30);

alert(`Ваш дневной бюджет: ${dayBudget}`);