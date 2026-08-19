const recipeTitle = "Udon Nudeln mit Erdnusssoße";
const imgSrc ="../images/udon.jpg";

let recipe = [
    {step: "Zuerst das Gemüse schnibbeln das drüber soll. Kann alles sein was da ist."
      +" Kurz in etwas Öl andünsten und etwas würzen. ", 
    
        ingredients: [
            {name: "Paprika", amount: 1 , unit: null},
            {name: "Zucchini", amount: 1 , unit: null},
            {name: "Karotte", amount: 1 , unit: null},
            {name: "Zwiebel", amount: 0.5 , unit: null},], 

        spices: [
            {name: "Salz & Pfeffer", amount: null, unit: null},
            {name: "Kurkuma", amount: null, unit: null}]
    },

    {step: "Udon Nudeln kochen und währenddessen die Soße zubereiten.",

        ingredients: [
            {name: "Udon Nudeln", amount: 2 , unit: "Portionen"}]
    },
     
    {step: "Zuerst die Zwiebel ein bisschen im Sesamöl anrösten und dann die restlichen "
      + "Zutaten dazugeben. Wenn es zu dick flüssig ist, mehr vom Nudelwasser dazu.   ",
        ingredients: [
            {name: "Sesamöl", amount:1, unit: "EL"},
            {name: "Erdnussbutter", amount:2, unit: "EL"},
            {name: "Sojasoße", amount:1, unit: "EL"},
            {name: "Honig", amount:1, unit: "TL"}], 

            spices: [
            {name: "Chili Pulver", amount: null, unit: null},
            {name: "Salz & Pfeffer", amount: null, unit: null}]
    },
    
    {step: "Dann die Nudeln in die Soße geben, auf einen Teller servieren und das Gemüse obendrauf packen." 
        + "Unbedingt Sesam dazu!"  ,
        ingredients: [
            {name: "Sesam", amount: null, unit:null}], 
    },


];

