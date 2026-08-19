const recipeTitle = "Lasagne mit Soja Schnetzeln";
const imgSrc ="../images/lasagne.jpg";

let recipe = [
    {step: "Sojageschnetzelts mit kochendem Wasser übergiesen und 15 Minuten quellen lassen. Bisschen Brühe dazu geben.",
        ingredients: [
            {name: "Sojageschnetzeltes", amount: 75 , unit: "g"}],
        spices: [    
             {name: "Gemüsebrühe", amount: 0.5, unit: "TL"}]
    },

    {step: "Gemüse schnibbeln (was der Kühlschrank so zu bieten hat), kurz anbraten und in den Topf geben.",
        ingredients: [
            {name: "Paprika", amount: 1, unit: null},
            {name: "Karotten", amount: 3, unit: null},
            {name: "Zwiebel", amount: 1, unit: null}]
    },
     
    {step: "Das Sojageschnetzelte zusammen mit Zwiebeln anbraten und mit Tomatenmark ablöschen und kurz weiter braten." 
        + " Alles in den Topf und gehackte Tomaten dazu. Mit passierten Tomaten auffüllen, damit es nicht zu dickflüssig wird.",
        ingredients: [
            {name: "Tomatenmark", amount: 1, unit: "Dose"},
            {name: "Gehackte Tomaten", amount: 1, unit: "Dose"},
            {name: "Passierte Tomaten", amount: 1, unit: "Dose"},
        ],
        spices: [    
            {name: "Paprika Edelsüß", amount: null, unit: null},
            {name: "Chili Pulver", amount: null, unit: null},
            {name: "Salz & Pfeffer", amount: null, unit: null}]
    },

         
    {step: "Die Fake Bechamel Soße zubereiten und den Ofen schonmal vorheizen. Dazu einfach alles Zutaten zusammen mischen. " 
        +  "Etwas Wasser dazu tun, wenn es zu dick wird und bisschen würzen.",
        ingredients: [
            {name: "Magerquark", amount: 250, unit: "g"},
            {name: "Körniger Frischkäse", amount: 200, unit: "g"},
            {name: "Passierte Tomaten", amount: 1, unit: "Dose"},
        ],
        spices: [    
            {name: "Salz & Pfeffer", amount: null, unit: null}]
    },

       {step: "Dann zuerst den Gemüsemix schichten, da drauf dann Bechamel-Fake und dann die Lasagne Platten. "
        + "Oben dann Streukäse drauf. Alles in den Ofen für ca. 40 Minuten - Platten brauchen bisschen um richtig durchzukochen. "
        + "Nach 25 Minuten den Käse mit Alufolie abdecken, damit der nicht verbrutzelt.",
        ingredients: [
            {name: "Lasagne Platten", amount: null, unit: null},
            {name: "Streukäse", amount: null, unit: null}
        ]
    }
];