/* Emissionswerte für die Kontinente 2008 und 2018 */

// Namespace benutze ich, wenn ich in einer anderen Datei die gleichen Konstanten habe //  

namespace NAME {                                            
    const Europa2008 : number = 4965.7;
    const Europa2018 : number = 4209.3;

    const Asien2008 : number = 12954.7;
    const Asien2018 : number = 16274.1;

    const Nordamerika2008: number = 6600.4;
    const Nordamerika2018: number = 6035.6;

    const Südamerika2008 : number = 1132.6;
    const Südamerika2018 : number = 1261.5;

    const Afrika2008 : number = 1028;
    const Afrika2018 : number = 1235.5;

    const Australien2008 : number = 1993;
    const Australien2018 : number = 2100.5;


    /* Gesamtemission der Kontinente 2018 */

    const Gesamtemission : number = Europa2018 + Asien2018 + Nordamerika2018
    + Südamerika2018 + Afrika2018 + Australien2018


    /* Prozentanteil der Gesamtemission aller Kontinente 2018 */

    const AnteilEuropa : number = ((Europa2018 / Gesamtemission) * 100);
    const AnteilAsien : number = ((Asien2018 / Gesamtemission) * 100);
    const AnteilNordamerika : number = ((Nordamerika2018 / Gesamtemission) * 100);
    const AnteilSüdamerika : number = ((Südamerika2018 / Gesamtemission) * 100);
    const AnteilAfrika : number = ((Afrika2018 / Gesamtemission) * 100);
    const AnteilAustralien : number = ((Australien2018 / Gesamtemission) * 100);


    /* Prozentuale Veränderung der Kontinente im Vergleich 2008 und 2018 */

    const ProzentualeVeränderungEuropa : number = (((Europa2018 / Europa2008) -1) * 100);
    const ProzentualeVeränderungAsien : number = (((Asien2018 / Asien2008) -1) * 100);
    const ProzentualeVeränderungNordamerika : number = (((Nordamerika2018 / Nordamerika2008) -1) * 100);
    const ProzentualeVeränderungSüdamerika : number = (((Südamerika2018 / Südamerika2008) -1) * 100);
    const ProzentualeVeränderungAfrika : number = (((Afrika2018 / Afrika2008) -1) * 100);
    const ProzentualeVeränderungAustralien : number = (((Australien2018 / Australien2008) -1) * 100);

    /* Vergleich von kg CO2 der Kontinente 2008 und 2018 */

    const VeränderungCO2Europa : number = (Europa2018 - Europa2008);
    const VeränderungCO2Asien : number = (Asien2018 - Asien2008);
    const VeränderungCO2Nordamerika : number = (Nordamerika2018 - Nordamerika2008);
    const VeränderungCO2Südamerika : number = (Südamerika2018 - Südamerika2008);
    const VeränderungCO2Afrika : number = (Afrika2018 - Afrika2008);
    const VeränderungCO2Australien : number = (Australien2018 - Australien2008);

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

}