/* Aufgabenstellung


In dieser Übung lernen wir, wie man auf die Objekte zugreift.

Verwende den Code aus dem Kommentarbereich.
Greife auf die Werte dieses Objekts zu:
"Nala"
"Droopy"
und lasse dir einmal alle Hundenamen anzeigen
Erstelle eine Methode, mit der man die Hundenamen ändern kann und rufe diese Methode auf.
 */

let unsereHaustiere = [
	{
		tiertyp: "Katze",

		names: ["Gipsy", "Nala", "Dinky"],
	},
	{
		tiertyp: "Hunde",
		names: ["Knöpfchen", "Pinselchen", "Droopy"],
		changeName(name) {
			return (this.names = name);
			console.log("💡 ~ changeName ~ this.names[0]", (this.names = name));
		},
	},
];

//"Nala"
console.log(unsereHaustiere[0].names[1]);
//"Droopy"
console.log(unsereHaustiere[1].names[2]);
// Alle Hundenamen
console.log(unsereHaustiere[1].names);
// Methode um Hundennamen zu ändern
console.log(unsereHaustiere[1].changeName(["Balu", "Snoopy"]));
