const sayHello = () => alert('Hello world!');
sayHello();
// Ćwiczenie 1
let price = 199;
let currency = 'PLN';
let label = `Cena wynosi: ${price}${currency}`;
console.log(label);

let z1 = 'Hello';
let z2 = 'World';
let label2 = `${z1} ${z2}`;
console.log(label2);

//Ćwiczenie 2
console.log('*********************');
const multiply = (a, b = 1) => a * b;
console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

//Ćwiczenie 3
console.log('*********************');
const average = (...args) => {
	let sum = 0;
	args.forEach(arg => {
		sum += arg;
	});
	return `Średnia podanych liczb wynosi: ${sum / args.length}`;
};
console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));

//Ćwiczenie 4
console.log('*********************');
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
console.log(average(...grades));

//Ćwiczenie 5
console.log('*********************');
function getName() {
	return [1, 4, 'Iwona', false, 'Nowak'];
}
const [,, firstname,, lastname] = getName();
console.log(`Imie: ${firstname}`);
console.log(`Nazwsiko: ${lastname}`);
