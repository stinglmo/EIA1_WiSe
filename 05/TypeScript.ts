/* Emissionswerte für die Kontinente 2008 und 2018 */

var Europa2008 : number = 4965.7;
var Europa2018 : number = 4209.3;

var Asien2008 : number = 12954.7;
var Asien2018 : number = 16274.1;

var Nordamerika2008: number = 6600.4;
var Nordamerika2018: number = 6035.6;

var Südamerika2008 : number = 1132.6;
var Südamerika2018 : number = 1261.5;

var Afrika2008 : number = 1028;
var Afrika2018 : number = 1235.5;

var Australien2008 : number = 1993;
var Australien2018 : number = 2100.5;

/* Gesamtemission der Kontinente 2018 */

var Gesamtemission : number = Europa2018 + Asien2018 + Nordamerika2018
+ Südamerika2018 + Afrika2018 + Australien2018


/* Prozentanteil der Gesamtemission aller Kontinente 2018 */

var AnteilEuropa : number = ((Europa2018 / Gesamtemission) * 100);
var AnteilAsien : number = ((Asien2018 / Gesamtemission) * 100);
var AnteilNoramerika : number = ((Nordamerika2018 / Gesamtemission) * 100);
var AnteilSüdamerika : number = ((Südamerika2018 / Gesamtemission) * 100);
var AnteilAfrika : number = ((Afrika2018 / Gesamtemission) * 100);
var AnteilAustralien : number = ((Australien2018 / Gesamtemission) * 100);


/* Prozentuale Veränderung der Kontinente im Vergleich 2008 und 2018 */

var ProzentualeVeränderungEuropa : number = (((Europa2018 / Europa2008) -1) * 100);
var ProzentualeVeränderungAsien : number = (((Asien2018 / Asien2008) -1) * 100);
var ProzentualeVeränderungNordamerika : number = (((Nordamerika2018 / Nordamerika2008) -1) * 100);
var ProzentualeVeränderungSüdamerika : number = (((Südamerika2018 / Südamerika2008) -1) * 100);
var ProzentualeVeränderungAfrika : number = (((Afrika2018 / Afrika2008) -1) * 100);
var ProzentualeVeränderungAustralien : number = (((Australien2018 / Australien2008) -1) * 100);

/* Vergleich von kg CO2 der Kontinente 2008 und 2018 */

var VeränderungCO2Europa : number = (Europa2018 - Europa2008);
var VeränderungCO2Asien : number = (Asien2018 - Asien2008);
var VeränderungCO2Nordamerika : number = (Nordamerika2018 - Nordamerika2008);
var VeränderungCO2Südamerika : number = (Südamerika2018 - Südamerika2008);
var VeränderungCO2Arika : number = (Afrika2018 - Afrika2008);
var VeränderungCO2Australien : number = (Australien2018 - Australien2008);

/* Konsolenausgaben */

console.log("Die Emission von Europa ist: " + Europa2018.toFixed(2) + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit " + AnteilEuropa.toFixed(2) + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + ProzentualeVeränderungEuropa.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + VeränderungCO2Europa.toFixed(2) + "kg CO2");

console.log("Die Emission von Asien ist: " + Asien2018.toFixed(2) + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit " + AnteilAsien.toFixed(2) + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + ProzentualeVeränderungAsien.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + VeränderungCO2Asien.toFixed(2) + "kg CO2");

console.log("Die Emission von Nordamerika ist: " + Nordamerika2018.toFixed(2) + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit " + AnteilNoramerika.toFixed(2) + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + ProzentualeVeränderungNordamerika.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + VeränderungCO2Nordamerika.toFixed(2) + "kg CO2")

console.log("Die Emission von Südamerika ist: " + Südamerika2018.toFixed(2) + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit " + AnteilSüdamerika.toFixed(2) + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + ProzentualeVeränderungSüdamerika.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + VeränderungCO2Südamerika.toFixed(2) + "kg CO2")

console.log("Die Emission von Afrika ist: " + Afrika2018.toFixed(2) + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit " + AnteilAfrika.toFixed(2) + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + ProzentualeVeränderungAfrika.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + VeränderungCO2Arika.toFixed(2) + "kg CO2");

console.log("Die Emission von Australien ist " + Australien2018.toFixed(2) + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit " + AnteilAustralien.toFixed(2) + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ProzentualeVeränderungAustralien.toFixed(2) + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das " + VeränderungCO2Australien.toFixed(2) + "kg CO2");




