/* Aufgabenstellung

In dieser Übung lernen wir, wie man auf die Objekte mit Hilfe von forEach() zugreift.
Verwende den Code aus dem Kommentarbereich.
Greife auf die Eigenschaften des Objekts zu und gib folgende Werte mit forEach() 
im HTML aus:
Alle “artist” 
Alle “title”
Alle “medium”

Bonus Aufgabe:
Gib alle “release_year” älter als 1975 aus


 */

let myMusic = [
	{
		artist: "The Beatles",
		title: "Abbey Road",
		release_year: 1969,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
	{
		artist: "Pink Floyd",
		title: "Dark Side of the Moon",
		release_year: 1978,
		medium: ["CS", "CD", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Led Zeppelin",
		title: "Led Zeppelin IV",
		release_year: 1971,
		medium: ["CS", "LP", "Download"],
		gold: true,
	},
	{
		artist: "Metallica",
		title: "Kill ’Em All und Ride the Lightning",
		release_year: 1983,
		medium: ["LP", "CD", "MC", "Download"],
		gold: true,
	},
];
/* 

Alle “artist” 
Alle “title”
Alle “medium”
 */

myMusic.forEach((album) => {
	console.log(album.artist);
	document.write(`${album.artist} <br>`);
});

myMusic.forEach((album) => {
	console.log(album.title);
	document.write(`${album.title} <br>`);
});
myMusic.forEach((album) => {
	console.log(album.medium);
	document.write(`${album.medium} <br>`);
});
