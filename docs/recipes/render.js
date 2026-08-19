
const recipeTitleContainer = document.getElementById('recipeTitle');
recipeTitleContainer.innerHTML = recipeTitle;

const imgSource = document.getElementById('image');
imgSource.innerHTML = `<img src=${imgSrc}></img alt=${recipeTitle}>`; 

function listIngredients(item) {
  return `<div class="ingredient">${item.name} ${item.amount ? item.amount : ""} ${item.unit ? item.unit : ""}</div>`;
}

function listSpices(item) {
  return `<div class="spice">${item.name} ${item.amount ? item.amount : ""} ${item.unit ? item.unit : ""}</div>`;
}

const recipeContainer = document.getElementById('recipe');

function render(myArray) {
  recipeContainer.innerHTML = ""; 

  for (let i = 0; i < myArray.length; i++) {
    //Here the steps are added. For each a new div is created. 
    recipeContainer.innerHTML += `<div>${i + 1}. ${myArray[i].step}</div>`;

    if (myArray[i].ingredients) {
      recipeContainer.innerHTML += myArray[i].ingredients.map(listIngredients).join("");
    }

    if (myArray[i].spices) {
      recipeContainer.innerHTML += myArray[i].spices.map(listSpices).join("");
    }
    recipeContainer.innerHTML += `<hr>`;
  }
}


//Create the Portions Buttons and store the reference in array
const portionContainer = document.getElementById('portions');
let maxPortions=8;
let buttons = [];

for (let i=1; i<=maxPortions;i++ ){
  const amountButton = document.createElement("button");
  amountButton.textContent = i; 
  amountButton.classList.add("portionButton");
  portionContainer.appendChild(amountButton);
  buttons.push(amountButton);
}

render(recipe);
buttons[1].classList.add("selectState"); 

function multiply(i){
function multiplyIngredient(ingredient) {
    return {
      name: ingredient.name,
      amount: ingredient.amount ? ingredient.amount * (i/2) : null,
      unit: ingredient.unit ? ingredient.unit : null
    };
  }

  function multiplySpice(spice) {
    return {
      name: spice.name,
      amount: spice.amount ? spice.amount * (i/2) : null,
      unit: spice.unit ? spice.unit : null
    };
  }

  function multiplyAll(step) {
    return {
      step: step.step,
      ingredients: step.ingredients ? step.ingredients.map(multiplyIngredient): null,
      spices: step.spices ? step.spices.map(multiplySpice) : null 
    };
  }

  let multiplyRecipe = recipe.map(multiplyAll);
  render(multiplyRecipe);
}

for (let i=1; i<=maxPortions;i++ ){
  buttons[i - 1].addEventListener("click",function(){
  multiply(i);    
  buttons.forEach(btn => btn.classList.remove("selectState"));
  buttons[i - 1].classList.add("selectState")
  });  
}



