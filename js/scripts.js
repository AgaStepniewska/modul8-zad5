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
} else {
	alert('wynik równy ZERO');
	console.log('wynik równy zero');
}
/* doczytałam o tym jeszcze raz w info z modułu, już rozumiem, na końcu jest 
samo else i wtedy już nie trzeba podawać w nawiasach warunku, bo jest to oczywiste */



