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

alert(Gesamtemission)

/* Prozentanteil der Gesamtemission aller Kontinente 2018 */

var AnteilEuropa : number = ((Europa2018 / Gesamtemission) * 100);
var AnteilAsien : number = ((Asien2018 / Gesamtemission) * 100);
var AnteilNoramerika : number = ((Nordamerika2018 / Gesamtemission) * 100);
var AnteilSüdamerika : number = ((Südamerika2018 / Gesamtemission) * 100);
var AnteilAfrika : number = ((Afrika2018 / Gesamtemission) * 100);
var AnteilAustralien : number = ((Australien2018 / Gesamtemission) * 100);


/* Prozentuale Veränderung der Kontinente im Vergleich 2008 und 2018 */

var ProzentualeVeränderungEuropa : number = ;
var ProzentualeVeränderungAsien : number = ;
var ProzentualeVeränderungNordamerika : number = ;
var ProzentualeVeränderungSüdamerika : number = ;
var ProzentualeVeränderungAfrika : number = ;
var ProzentualeVeränderungAustralien : number = ;

/* Vergleich von kg CO2 der Kontinente 2008 und 2018 */

var VeränderungCO2Europa : number = ;
var VeränderungCO2Asien : number = ;
var VeränderungCO2Nordamerika : number = ;
var VeränderungCO2Südamerika : number = ;
var VeränderungCO2Arika : number = ;
var VeränderungCO2Australien : number = ;

/* Konsolenausgaben */

console.log("Die Emission von Europa ist:" + Europa2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit" + AnteilEuropa + "%");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um" + ProzentualeVeränderungEuropa + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + VeränderungCO2Europa + "kg CO2");

console.log("Die Emission von Asien ist:" + Asien2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit" + AnteilAsien + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um" + ProzentualeVeränderungAsien + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + VeränderungCO2Asien + "kg CO2");

console.log("Die Emission von Nordamerika ist:" + Nordamerika2018 + "kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit" + AnteilNoramerika + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + ProzentualeVeränderungNordamerika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + VeränderungCO2Nordamerika + "kg CO2")

console.log("Die Emission von Südamerika ist:" + Südamerika2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit" + AnteilSüdamerika + "%");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um" + ProzentualeVeränderungSüdamerika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + VeränderungCO2Südamerika + "kg CO2")

console.log("Die Emission von Afrika ist:" + Afrika2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit" + AnteilAfrika + "%");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um" + ProzentualeVeränderungAfrika + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + VeränderungCO2Arika + "kg CO2");

console.log("Die Emission von Australien ist" + Australien2018);
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit" + AnteilAustralien + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um" + ProzentualeVeränderungAustralien + "% verändert");
console.log("2018 im Vergleich zu 2008 sind das" + VeränderungCO2Australien + "kg CO2");




