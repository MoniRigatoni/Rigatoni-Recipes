
const recipeTitle = "Pizza";
const imgSrc ="../images/pizza.jpg";

let recipe = [
    {step: "Noch mit Fertigteig, später dann eigener." 
        + "Soße aus passierten Tomaten und Tomatenmark.",
        ingredients: [
            {name: "Pizza Teig", amount: 1 , unit: null},
            {name: "Passierte Tomaten", amount: 1 , unit: "Dose"}, 
            {name: "Tomatenmark", amount: 2 , unit: "EL"}
        ],

        spices: [
            {name: "Oregano", amount: null, unit: null},
            {name: "Salz & Pfeffer", amount: null, unit: null},
        ]
    },

    {step: "Gemüse schnibbeln und Airfryer für ca. 5-10 Minuten vorbacken," 
        + "damit die Pizza nicht so wässrig wird.",

        ingredients: [
            {name: "Paprika", amount: 2 , unit: null},
            {name: "Zucchini", amount: 1 , unit: null},
            {name: "Pilze", amount: 6 , unit: null}
        ], 

        spices: [
            {name: "Paprika Edelsüß", amount: null, unit: null}]
    },
     
    {step: "Restliches Gemüse drauf und bisschen Käse (eventuell Feta)." 
        + "Pepperoni im ganzen drauf, damit die Flüssigkeit nicht so stark rausgeht..",
        ingredients: [
            {name: "Zwiebel", amount: 1, unit: null},
            {name: "Pepperoni", amount: 6, unit: null},
            {name: "Feta", amount: 0.5, unit: null}
        ],
        spices: [
            {name: "Salz & Pfeffer", amount: null, unit: null}]
    }
];
