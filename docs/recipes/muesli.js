const recipeTitle = "Müsli";
const imgSrc ="../images/muesli.jpg";

let recipe = [
    {step: "Feine und grobe Haferflocken halb/halb mischen." 
        +" Kleines bisschen Leinsamen und gefrorene Blaubeeren.",
        ingredients: [
            {name: "Haferflocken", amount: 2 , unit: "EL"},
            {name: "Blaubeeren", amount: 1 , unit: "EL"}, 
            {name: "Leinsamen", amount: 0.5 , unit: "TL"}
        ]
    },

    {step: "Hafermilch dazu und mind. 15 min einweichen oder über Nacht.",

        ingredients: [
            {name: "Hafermilch", amount: 80 , unit: "mL"}]
    },
     
    {step: "Skyr dazu für extra Protein, Nüsse und Zimt drauf.",
        ingredients: [
            {name: "Nüsse", amount: 15, unit: "g"},
            {name: "Skyr", amount: 60, unit: "g"}
        ],
        spices: [
            {name: "Zimt", amount: null, unit: null}]
    }
];


  