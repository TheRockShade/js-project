'use strict';

let money = +prompt('Ваш бюджет на месяц?', '50000');
let time = prompt('Введите дату в формате YYYY-MM-DD', '1998-05-03');

let appData = {
	budget: money,
	timeData: time,
	expenses: {},
	optionalExpenses: {},
	income: [],
	savings: false,
};

for (let i = 0; i < 2; i++) {
	let requiredSpending = prompt('Введите обязательную статью расходов в этом месяце', '500');
	let spending = prompt('Во сколько обойдется?', '10000');

	if(typeof(requiredSpending) === 'string' && typeof(requiredSpending) != null && typeof(spending) != null &&requiredSpending != '' && spending != '' && requiredSpending.length < 50) {
		console.log('done');
		appData.expenses[requiredSpending] = spending;
	} else {
		i--;
	}
}

appData.moneyPerDay = Math.round(appData.budget / 30);

alert(`Ваш дневной бюджет: ${appData.moneyPerDay}`);

if(appData.moneyPerDay < 100) {
	console.log('Минимальный уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
	console.log('Средний уровень достатка');
} else if (appData.moneyPerDay > 2000) {
	console.log('Высокий уровень достатка');
} else {
	console.log('Произошла ошибка');
}