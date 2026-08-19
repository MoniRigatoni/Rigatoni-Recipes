const recipeTitle = "Linsenchilli mit Cous Cous";
const imgSrc ="../images/linsenchilli.jpg";

let recipe = [
    {step: "Linsen gut waschen und dann mit Zwiebeln" 
        +" und etwas Öl kurz anrösten. Dann in einen Topf rüberschubbeln und eine Dose gehackte Tomaten dazu tun."
        +" Das kann schon mal auf niedriger Stufe (ca. 6) köcheln.",
        ingredients: [
            {name: "Zwiebel", amount: 1 , unit: null},
            {name: "Olivenöl", amount: 1 , unit: "EL"}]
    },

    {step: "Als nächstes die Karotten in kleine Stückchen schneiden." 
        +" Die auch in etwas Öl anbraten und würzen.",
        ingredients: [
            {name: "Karotten", amount: 3, unit: null}], 

        spices: [    
            {name: "Kurkuma", amount: null, unit: null},
            {name: "Salz & Pfeffer", amount: null, unit: null}]
    },
     
    {step: "Danach restliches Gemüse schnibbeln was grade so das ist.",
        ingredients: [
            {name: "Paprika", amount: 1, unit: null},
            {name: "Zucchini", amount: 1, unit: null}
        ]
    },

         
    {step: "Cous Cous zubereiten. Einfach mit heißem Wasser übergießen" 
         +" bis er verdeckt ist und bisschen Brühe dazu.",
        ingredients: [
            {name: "Cous Cous", amount: 100, unit: "g"}
        ],
        spices: [    
            {name: "Brühe", amount: null, unit: null}]
    },

    {step: "Alle Zutaten zuammen in einen Topf und eventuell etwas passierte Tomaten dazu wenn zu trocken."
        +" Mais drauf. Insgesamt sollen die Linsen mind. 10 Minuten köcheln." 
        +" Aber alles nicht zu lange köcheln, damit das Gemüse nicht zu weich wird."
        +" köcheln, damit das Gemüse nicht zu weich wird",
        ingredients: [
            {name: "Passiert Tomaten", amount: 1, unit: "Dose"},
            {name: "Tomatenmark", amount: 2, unit: "EL"},
            {name: "Mais", amount: 1, unit: "Kleine Dose"}], 

        spices: [    
            {name: "Paprika Pulver", amount: null, unit: null},
            {name: "Chili Pulver", amount: null, unit: null}]
    },

    {step: "Avocado dazu. Bisschen Zitrone wenn da.", 
        ingredients: [
            {name: "Avocado", amount: 0.5, unit: null},
            {name: "Zitrone", amount: null, unit: "Spritzer"}] 
    }
];