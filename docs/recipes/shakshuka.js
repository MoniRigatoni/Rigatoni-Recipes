const recipeTitle = "Shakshuka";
const imgSrc ="../images/shakshuka.jpg";

let recipe = [
    {step: "Wie immer, zuerst das Gemüse schnibbeln.", 
    
        ingredients: [
            {name: "Zwiebel", amount: 1 , unit: null},
            {name: "Paprika", amount: 1 , unit: null}]
    },

    {step: "Dann etwas Olivenöl in die Pfanne tun und zuerst die Zwiebeln dann die Paprika anschwitzen."
        + "Beides schonmal würzen. Wenn da, können auch Kirchererbsen dazu.",

        ingredients: [
            {name: "Kichererbsen", amount: 1 , unit: "Kleine Dose"}], 

        spices: [
            {name: "Chili Pulver", amount: null, unit: null},
            {name: "Paprika Edelsüß", amount: null, unit: null},
            {name: "Kreuzkümmel (bisschen)", amount: null, unit: null}]
    },
     
    {step: "Das Tomatenmark (1EL oder was mehr) jetzt als <b>erstes</b> rein," 
      +" vor den gehackten Tomaten. So kann das noch etwas mit anrösten." 
      +" Dann alles für ca. 10 Minuten auf kleiner Stufe (ohne Deckel) braten lassen" 
      +" damit es etwas eindickt.",
        ingredients: [
            {name: "Tomatenmark", amount: 2, unit: "EL"},
            {name: "Gehackte Tomaten", amount: 1, unit: "Dose"}], 

        spices: [
            {name: "Salz & Pfeffer", amount: null, unit: null}]
    },
    
    {step: "Kleine Mulden formen in der Tomatenmaße, da kommen die Eier rein." 
        +" Die Eier klein bisschen mit Salz nachwürzen.Feta drüber streuen. "  ,
        ingredients: [
            {name: "Eier", amount: 4, unit: null},
            {name: "Feta", amount: 0.5, unit: null}], 

        spices: [
            {name: "Salz", amount: null, unit: null}]
    },


    {step: "Dann so ca. <b>10 Minuten</b> (mit Deckel) ziehen lassen. Eigentlich sollten die Eier dann noch ein wenig weich sein,"
        + " aber wir mögen sie lieber was härter. Daher packen wir noch paar"
        + " Minuten obendrauf und pieksen rein um zu schauen ob sie passen.", 

    }
     

];

