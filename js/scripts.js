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
} if (value == 0) {
	alert('wynik równy ZERO');
	console.log('wynik równy zero');
}
// odnośnie else if = czyli rozumiem, ze jesli wynik jest oczywisty uzywam tylko if. if cos to cos?


