/* Aufgabenstellung


In dieser Übung lernen wir, wie man auf die Objekte zugreift.
Verwende den Code aus dem Kommentarbereich.
Füge zu dem Objekt Deine Lieblingsmusik hinzu.
Greife mit console.log auf die Werte dieses Objekts zu:
"The Beatles"
Von Pink Floyd: "Download"
Von Pink Floyd: true
1971 und 1983
Von Metallica: "MC"
Von Metallica das Wort: Ride
Von Led Zeppelin das Wort: IV:
Von Pink Floyd das Wort: Floyd

 */

let myMusic = [
	{
		kunstler: "The Beatles",
		title: "Abbey Road",
		release_jahr: 1969,
		formate: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
	{
		kunstler: "Pink Floyd",
		title: "Dark Side of the Moon",
		release_jahr: 1978,
		formate: ["CS", "CD", "LP", "Download"],
		gold: true,
	},
	{
		kunstler: "Led Zeppelin",
		title: "Led Zeppelin IV",
		release_jahr: 1971,
		formate: ["CS", "LP", "Download"],
		gold: true,
	},
	{
		kunstler: "Metallica",
		title: "Kill ’Em All und Ride the Lightning",
		release_jahr: 1983,
		formate: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
];

/* 
"The Beatles"
Von Pink Floyd: "Download"
Von Pink Floyd: true
1971 und 1983
Von Metallica: "MC"
Von Metallica das Wort: Ride
Von Led Zeppelin das Wort: IV:
Von Pink Floyd das Wort: Floyd
 */

console.log(myMusic[0].kunstler);
console.log(`Von ${myMusic[1].kunstler}: ${myMusic[1].formate[3]}`);
console.log(`Von ${myMusic[1].kunstler}: ${myMusic[1].gold}`);
console.log(`${myMusic[2].release_jahr}und ${myMusic[3].release_jahr}`);
console.log(`Von ${myMusic[3].kunstler}: ${myMusic[3].formate[2]}`);
console.log(
	`Von ${myMusic[3].kunstler} das Wort ${myMusic[3].title
		.split(" ")
		.filter((e) => e === "Ride")}`
);
console.log(
	`Von ${myMusic[2].kunstler} das Wort ${myMusic[2].title
		.split(" ")
		.filter((e) => e === "IV")}`
);
console.log(
	`Von ${myMusic[1].kunstler} das Wort ${myMusic[1].kunstler
		.split(" ")
		.filter((e) => e === "Floyd")}`
);
