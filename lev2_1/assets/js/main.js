/* Aufgabenstellung


Greife auf die Objekte im Array mit Hilfe von map(), forEach(), filter() zu.
Der Code dazu ist im Kommentarbereich.


Gib alles als Tabelle in deinem HTML-Dokument aus.

 */

//*====================

const namesCol = document.querySelector(".names");
const pricesCol = document.querySelector(".prices");
const changesCol = document.querySelector(".changes");

let edelMetallPreise = [
	{ name: "Gold", preiseGramEuro: 42.91, veraenderung: "+0.12%" },
	{ name: "Silber", preiseGramEuro: 0.51, veraenderung: "+1.02%" },
	{ name: "Platin", preiseGramEuro: 25.74, veraenderung: "+0.41%" },
	{ name: "Palladium", preiseGramEuro: 50.93, veraenderung: "0.00%" },
	{ name: "Rhodium", preiseGramEuro: 160.12, veraenderung: "-0.10%" },
	{ name: "Iridium", preiseGramEuro: 42.84, veraenderung: "0.00%" },
	{ name: "Ruthenium", preiseGramEuro: 7.36, veraenderung: "0.00%" },
	{ name: "Rhenium", preiseGramEuro: 37.22, veraenderung: "-0.53%" },
	{ name: "Osmium", preiseGramEuro: 11.54, veraenderung: "0.00%" },
];

//Verwende forEach() und greife auf alle name zu. Pushe diese in ein neues Array.
//Verwende map() und greife auf alle name zu.
const names = [];

edelMetallPreise.forEach((metal) => names.push(metal.name));
console.log(names);

names.map((name) => {
	console.log(name);
	namesCol.innerHTML += `<p>${name}</p>`;
});

// Verwende forEach() und greife auf alle preiseGramEuro zu und pushe diese ein neues Array.
// Verwende map() und greife auf alle preiseGramEuro zu.

const prices = [];

edelMetallPreise.forEach((metal) => prices.push(metal.preiseGramEuro));

prices.map((price) => {
	console.log(price);
	pricesCol.innerHTML += `<p>${price}</p>`;
});
console.log(prices);

// Verwende forEach() und greife auf alle veraenderung zu und pushe in ein neues Array.
// Verwende map() und greife auf alle veraenderung zu.

const changes = [];

edelMetallPreise.forEach((metal) => changes.push(metal.veraenderung));
console.log(changes);

changes.map((change) => {
	console.log(change);
	changesCol.innerHTML += `<p>${change}</p>`;
});

// Verwende filter() und greife auf preiseGramEuro die teurer als 50 Euro zu

let over50 = edelMetallPreise.filter((metal) => {
	if (metal.preiseGramEuro > 50) {
		return metal;
	}
});

console.log("💡 ~ over50", over50);
