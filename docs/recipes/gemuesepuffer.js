const recipeTitle = "Gemüsepuffer";
const imgSrc = "../images/gemuesepuffer.jpg";  

let recipe = [
{step:"Gemüse raspeln und dann in einer Pfanne für ein paar Minuten anschmoren und abkühlen lassen. ", 
    ingredients: [
        {name: "Kohlrabi", amount: 1, unit: null}, 
        {name: "Karotten", amount: 3, unit: null},
        {name: "Pastinaken", amount: 2, unit: null},
        {name: "Olivenöl", amount: 1, unit: "EL"}]
}, 

{step:"Brötchen von gestern in kaltem Wasser einweichen.",
    ingredients: [
        {name: "Altes Brötchen", amount: 0.5, unit: null}]
},

{step:"Dann das Gemüse in eine Schüssel geben und das weiche Brötchen auswringen und dazu tun."
    + " Zusammen mit den anderen Zutaten alles gut vermischen. "
    + "Vollkornmehl soviel dazugeben bis die Maße eine klebrige Konsistenz hat.", 
    ingredients: [
        {name: "Vollkornmehl", amount: null, unit: null}, 
        {name: "Ei", amount: 1, unit: null}
    ], 

    spices: [
        {name: "Salz&Pfeffer", amount: null, unit: null}, 
        {name: "Paprikapulver", amount: null, unit: null}]
},

{step:"Aus der Maße dann ungefähr 6 Puffer Bällchen formen und die insgesamt für ca. 10 Minuten anbraten." 
    + " Man kann sie gut bei ca. 160° C in den Backofen legen zum warmhalten.",
    ingredients: [
        {name: "Olivenöl", amount: 1, unit: "EL"}], 
},

{step:"Dazu passt gut ein Dip aus Frischkäse und Joghurt",
    ingredients: [
        {name: "Frischkäse", amount: 2, unit: "EL"},
        {name: "Joghurt", amount: 2, unit: "EL"}, 
        {name: "Paprikakräuter", amount: 1, unit: "TL"}],
}

]; 