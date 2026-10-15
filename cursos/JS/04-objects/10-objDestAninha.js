
//Destructuring objetos aninhados

const recipe = {
  ingredients: {
    flour: "2 cups",
    sugar: "1 cup"
  }
};

//Pega a variável flour, não ingredients:

let {
    ingredients: {flour}
} = recipe;

console.log(flour); 

flour = "3 cups";

console.log(flour); 

let {
    ingredients
} = recipe;

console.log(ingredients);

ingredients.sugar = "0.5 cup";

console.log(ingredients);
