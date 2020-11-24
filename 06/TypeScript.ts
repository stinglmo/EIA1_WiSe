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

// Gesamtemission //

function FunctionGes(Gesamtemission2018:number) {
    console.log("Die Gesamtemission aller Kontinente beträgt im Jahr 2018 " + Gesamtemission2018);
   
}

FunctionGes(Gesamtemission);

// Funktionen //

function FunctionAllg(Kontinent:string, Rechnung:number) {
    console.log("Die Emission von " + Kontinent + "ist " + Rechnung + "kg CO2");
    console.log("Relativ zur Gesamtemission verursacht " + Kontinent + " damit " + Rechnung + " %");
    console.log("Für " + Kontinent + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Rechnung + "% verändert");
    console.log("2018 im Vergleich zu 2008 sind das " + Rechnung + "kg CO2");
    
}

// Europa //
FunctionAllg("Europa", Europa2018)