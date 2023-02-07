/* Aufgabenstellung

Du hast Sammlungen deiner Lieblingsbands. Du möchtest sie alphabetisch sortieren.
Sortiere die Bands alphabetisch nach Namen.
Verwende den Code aus dem Kommentarbereich.
Sortiere die Bands alphabetisch.
Gib es in der Konsole aus.

Assets
sort()
if else
return
 */
const singers = [
	{
		name: "The Beatles",
		country: "United Kingdom",
		period_active: { start: 1960, end: 1970 },
		genre: "Rock / Pop",
	},
	{
		name: "Elvis Presley",
		country: "United States",
		period_active: { start: 1954, end: 1977 },
		genre: "Rock and roll",
	},
	{
		name: "Michael Jackson",
		country: "United States",
		period_active: { start: 1964, end: 2009 },
		genre: "Pop / Rock / Dance / Soul / R&B",
	},
	{
		name: "Elton John",
		country: "United Kingdom",
		period_active: { start: 1964, end: "present" },
		genre: "Pop / Rock",
	},
	{
		name: "Madonna",
		country: "United States",
		period_active: { start: 1979, end: "present" },
		genre: "Pop / Dance / Electronica",
	},
	{
		name: "Led Zeppelin",
		country: "United Kingdom",
		period_active: { start: 1968, end: 1980 },
		genre: "Hard rock / Blues rock / Folk rock",
	},
	{
		name: "Rihanna",
		country: "United States",
		period_active: { start: 2005, end: "present" },
		genre: "R&B / Pop / Dance / Hip-hop",
	},
	{
		name: "Pink Floyd",
		country: "United Kingdom",
		period_active: { start: 1965, end: 1996, extra: 2014 },
		genre: "Progressive rock / Psychedelic rock",
	},
];

function sort() {
	singers.sort((a, b) => {
		let x = a.name;
		let y = b.name;
		if (x < y) {
			return -1;
		}
		if (x > y) {
			return 1;
		}
		return 0;
	});
	console.log(singers);
}

sort();
