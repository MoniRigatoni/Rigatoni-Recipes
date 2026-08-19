const recipeTitle = "Feta mit Gemüse";
const imgSrc = "../images/feta_gemuese.jpg";  

let recipe = [
{step:"Gemüse schnibbeln und in eine Schüssel geben.", 
    ingredients: [
        {name: "Paprika", amount: 1, unit: null}, 
        {name: "Zucchini", amount: 0.5, unit: null},
        {name: "Zwiebel", amount: 1, unit: null},
        {name: "Tomate", amount: 1, unit: null},
        {name: "Milde Pepperoni", amount: null, unit: null}
    ]
}, 

{step:"Feta dazu und etwas Olivenöl. Umrühren und in Auflaufform geben. Alles bei ca. 200°C Umluft 20 min backen.",
    ingredients: [
        {name: "Feta", amount: 1, unit: null}, 
        {name: "Olivenöl", amount: 1, unit: "Esslöffel"}
    ],
    spices: [
        {name: "Paprikapulver", amount: null, unit: null}, 
        {name: "Pfeffer", amount: null, unit: null}
    ]
},

{step:"Am besten Vollkornbaquette dazu.",
    ingredients: [
        {name: "Vollkornbaquette", amount: null, unit: null}
    ]
}

]; 