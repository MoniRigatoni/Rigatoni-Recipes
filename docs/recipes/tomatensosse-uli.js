const recipeTitle = "Ulis Tomatensoße";
const imgSrc ="../images/tomatensosse-uli.jpg";

let recipe = [
    {step: "Zu allererst müssen Zwiebeln kleingeschnibbelt werden." 
        +" Die müssen nicht zu winzig klein sein da sie ja"
        +" angeschmort werden in Margarine. Davon ca. 1 Esslöffel (oder mal bissle weniger oder bissle mehr) zutun. Schmoren lassen.", 
    
        ingredients: [
            {name: "Zwiebel", amount: 1 , unit: null},
            {name: "Margarine", amount: 1 , unit: "EL"}]
    },

    {step: "Geschmorte Zwiebelchen vom Herd nehmen. Und dann mit dem Schneebesen"
        + " zuerst Mehl und dann ordentlich Tomatenmark reinrühren.",

        ingredients: [
            {name: "Tomatenmark", amount: 3 , unit: "EL"},
            {name: "Mehl", amount: 1 , unit: "EL"}], 
    },
     
    {step: "Dann darf es wieder auf den Herd bei kleiner Hitze. Als nächstes laaaaaangsam" 
     +" Wasser zugeben und mit dem Schneebesen verrühren. Spritzt eventuell, besser keine Sauerrei machen." 
     +" Ob es zu viel oder zu wenig Wasser ist, erkennt man dann an der Konsistenz. Man hat das Ziel erreicht wenn sie" 
     +" gut klebrig ist und nicht zu flüssig. Ansonsten nochmal Tomatenmark dazu tun. ",
        ingredients: [
            {name: "Wasser", amount:null, unit: null}]
    },
    
    {step: "Zum Schluss noch etwas würzen. Auch ein spritzer Zitrone zu tun wenn da ist."  ,
        ingredients: [
            {name: "Zitrone", amount: null, unit:"Spritzer"}], 
           
        spices: [
            {name: "Salz&Pfeffer", amount: null, unit: null},
            {name: "Gemüsebrühe", amount: null, unit: null}]
    },


];

