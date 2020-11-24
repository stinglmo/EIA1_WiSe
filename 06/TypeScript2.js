/* Emissionswerte für die Kontinente 2008 und 2018 */
// Namespace benutze ich, wenn ich in einer anderen Datei die gleichen Konstanten habe //  
var NAME;
(function (NAME) {
    var Europa2008 = 4965.7;
    var Europa2018 = 4209.3;
    var Asien2008 = 12954.7;
    var Asien2018 = 16274.1;
    var Nordamerika2008 = 6600.4;
    var Nordamerika2018 = 6035.6;
    var Südamerika2008 = 1132.6;
    var Südamerika2018 = 1261.5;
    var Afrika2008 = 1028;
    var Afrika2018 = 1235.5;
    var Australien2008 = 1993;
    var Australien2018 = 2100.5;
    /* Gesamtemission der Kontinente 2018 */
    var Gesamtemission = Europa2018 + Asien2018 + Nordamerika2018
        + Südamerika2018 + Afrika2018 + Australien2018;
    /* Prozentanteil der Gesamtemission aller Kontinente 2018 */
    var AnteilEuropa = ((Europa2018 / Gesamtemission) * 100);
    var AnteilAsien = ((Asien2018 / Gesamtemission) * 100);
    var AnteilNordamerika = ((Nordamerika2018 / Gesamtemission) * 100);
    var AnteilSüdamerika = ((Südamerika2018 / Gesamtemission) * 100);
    var AnteilAfrika = ((Afrika2018 / Gesamtemission) * 100);
    var AnteilAustralien = ((Australien2018 / Gesamtemission) * 100);
    /* Prozentuale Veränderung der Kontinente im Vergleich 2008 und 2018 */
    var ProzentualeVeränderungEuropa = (((Europa2018 / Europa2008) - 1) * 100);
    var ProzentualeVeränderungAsien = (((Asien2018 / Asien2008) - 1) * 100);
    var ProzentualeVeränderungNordamerika = (((Nordamerika2018 / Nordamerika2008) - 1) * 100);
    var ProzentualeVeränderungSüdamerika = (((Südamerika2018 / Südamerika2008) - 1) * 100);
    var ProzentualeVeränderungAfrika = (((Afrika2018 / Afrika2008) - 1) * 100);
    var ProzentualeVeränderungAustralien = (((Australien2018 / Australien2008) - 1) * 100);
    /* Vergleich von kg CO2 der Kontinente 2008 und 2018 */
    var VeränderungCO2Europa = (Europa2018 - Europa2008);
    var VeränderungCO2Asien = (Asien2018 - Asien2008);
    var VeränderungCO2Nordamerika = (Nordamerika2018 - Nordamerika2008);
    var VeränderungCO2Südamerika = (Südamerika2018 - Südamerika2008);
    var VeränderungCO2Afrika = (Afrika2018 - Afrika2008);
    var VeränderungCO2Australien = (Australien2018 - Australien2008);
    // Gesamtemission //
    function FunctionGes(Gesamtemission2018) {
        console.log("Die Gesamtemission aller Kontinente beträgt im Jahr 2018 " + Gesamtemission2018);
    }
    FunctionGes(Gesamtemission);
    // Funktionen //
    function FunctionAllg(Kontinent, Rechnung) {
        console.log("Die Emission von " + Kontinent + "ist " + Rechnung.toFixed(2) + "kg CO2");
        console.log("Relativ zur Gesamtemission verursacht " + Kontinent + " damit " + Rechnung.toFixed(2) + " %");
        console.log("Für " + Kontinent + " hat sich 2018 im Vergleich zu 2008 die Emission um " + Rechnung.toFixed(2) + "% verändert");
        console.log("2018 im Vergleich zu 2008 sind das " + Rechnung.toFixed(2) + "kg CO2");
    }
    // Europa //
    FunctionAllg("Europa", Europa2018);
    FunctionAllg("Europa", AnteilEuropa);
    FunctionAllg("Europa", ProzentualeVeränderungEuropa);
    FunctionAllg("Europa", VeränderungCO2Europa);
    // Asien //
    FunctionAllg("Asien", Asien2018);
    FunctionAllg("Asien", AnteilAsien);
    FunctionAllg("Asien", ProzentualeVeränderungAsien);
    FunctionAllg("Asien", VeränderungCO2Asien);
    // Nordamerika //
    FunctionAllg("Nordamerika", Nordamerika2018);
    FunctionAllg("Nordamerika", AnteilNordamerika);
    FunctionAllg("Nordamerika", ProzentualeVeränderungNordamerika);
    FunctionAllg("Nordamerika", VeränderungCO2Nordamerika);
    // Südamerika //
    FunctionAllg("Südamerika", Südamerika2018);
    FunctionAllg("Südamerika", AnteilSüdamerika);
    FunctionAllg("Südamerika", ProzentualeVeränderungSüdamerika);
    FunctionAllg("Südamerika", VeränderungCO2Südamerika);
    // Afrika //
    FunctionAllg("Afrika", Afrika2018);
    FunctionAllg("Afrika", AnteilAfrika);
    FunctionAllg("Afrika", ProzentualeVeränderungAfrika);
    FunctionAllg("Afrika", VeränderungCO2Afrika);
    // Australien //
    FunctionAllg("Australien", Australien2018);
    FunctionAllg("Australien", AnteilAustralien);
    FunctionAllg("Australien", ProzentualeVeränderungAustralien);
    FunctionAllg("Australien", VeränderungCO2Australien);
    // Europa //
    document.getElementById("europe").addEventListener("click", function () {
        document.getElementById("AbsoluterWert").innerHTML = Europa2018;
        document.getElementById("RelativerWert").innerHTML = AnteilEuropa;
        document.getElementById("WachstumsrateProzent").innerHTML = ProzentualeVeränderungEuropa;
        document.getElementById("WachstumsrateAbsolut").innerHTML = VeränderungCO2Europa;
    });
    // Asien //
})(NAME || (NAME = {}));
//# sourceMappingURL=TypeScript2.js.map