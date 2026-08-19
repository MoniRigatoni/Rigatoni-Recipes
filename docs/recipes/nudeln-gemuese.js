const recipeTitle = "Nudeln mit Gemüse";
const imgSrc ="../images/nudeln-gemuese.jpg";

let recipe = [
    {step: "Gemüse schnibbeln. Was der Kühlschrank so hergibt.", 
    
        ingredients: [
            {name: "Paprika", amount: 1 , unit: null},
            {name: "Zucchini", amount: 1 , unit: null}, 
            {name: "Zwiebeln", amount: 0.5 , unit: null}, 
            {name: "Pilze", amount: 6 , unit: null}
        ]
    },

    {step: "Nudeln (Vollkorn oder Dinkel) kochen",

        ingredients: [
            {name: "Nudeln", amount: 0.5 , unit: "Packung"}]
    },
     
    {step: "Tomatenfrischkäsesoße in einem extra Topf vorbereiten.",
        ingredients: [
            {name: "Tomatenmark", amount: 2, unit: "EL"},
            {name: "Frischkäse", amount: 4, unit: "EL"}
        ],
        spices: [
            {name: "Salz&Pfeffer", amount: null, unit: null},
            {name: "Gefrobrühe", amount: null, unit: null}]
    },

    {step: "Jetzt das Gemüse anbraten. Dann zuerst die Soße auf die Nudeln"
        + " und dann das Gemüse drüber. Parmesan dazu.",
        ingredients: [
          
            {name: "Parmesan", amount: null, unit: null}],

    }
];