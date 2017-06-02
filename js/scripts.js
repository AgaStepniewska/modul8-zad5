// scripts.js
var a = prompt('Podaj wartość a: '),
	b = prompt('Podaj wartość b: '),
	value = (a * a) + (2 * a * b) - (b * b);
alert('wynik obliczenia (a*a)+(2*a*b)-(b*b) to: ' + value);
console.log('afer calculation we will get: ' + value);
if (value > 0) {
	console.log('wynik dodatni');
} else if (value < 0) {
	console.log('wynik ujemny');
} else if (value == 0) {
	alert('wynik równy ZERO');
	console.log('wynik równy zero');
}



// dodaj instrukcję, która sprawdzi czy wynik jest 
//równy 0 czy nie i wyświetli tą info
