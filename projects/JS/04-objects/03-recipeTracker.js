
const recipes=[];

const recipe1={
    name:"Spaghetti Carbonara",
    ingredients: [
        "spaghetti", "Parmesan cheese", "pancetta", "black pepper"
    ],
};

recipe1.cookingTime = 22, recipe1.totalIngredients = null, recipe1.difficultyLevel = "";

// console.log(recipe1);

const recipe2={
    name: "Chicken Curry",
    ingredients: [
        "chicken breast", "coconut milk", "curry powder", "onion", "garlic"
    ],
    cookingTime: 42,
    totalIngredients: null,
    difficultyLevel: ""
};

// console.log(recipe2);

const recipe3={
    name: "Vegetable Stir Fry",
    ingredients: [
        "broccoli", "carrot", "bell pepper"
    ],
    cookingTime: 15,
    totalIngredients: null,
    difficultyLevel: ""
};

// console.log(recipe3);

recipes.push(recipe1,recipe2,recipe3);

// console.log(recipes);

function getTotalIngredients(arr){
    return arr.length;
};

// console.log(getTotalIngredients(recipe2.ingredients));

function getDifficultyLevel(time){
    if(time <= 30){
        return "easy";
    }else if(time <= 60){
        return "medium";
    }else return "hard";
}

// console.log(getDifficultyLevel(recipe3.difficultyLevel = 300));

const recipe1TotalIngredients = getTotalIngredients(recipe1.ingredients);
const recipe1DifficultyLevel = getDifficultyLevel(recipe1.difficultyLevel);

// console.log(recipe1TotalIngredients);
// console.log(recipe1DifficultyLevel);

//recipe1
recipe1.totalIngredients = recipe1TotalIngredients;

// console.log(recipe1.totalIngredients);

recipe1.difficultyLevel = getDifficultyLevel(recipe1.cookingTime);

// console.log(recipe1.difficultyLevel);


//recipe2

const recipe2TotalIngredients = getTotalIngredients(recipe2.ingredients);
const recipe2DifficultyLevel = getDifficultyLevel(recipe2.difficultyLevel);

recipe2.totalIngredients = recipe2TotalIngredients;

// console.log(recipe2.totalIngredients);

recipe2.difficultyLevel = getDifficultyLevel(recipe2.cookingTime);

// console.log(recipe2.difficultyLevel);


//recipe3

const recipe3TotalIngredients = getTotalIngredients(recipe3.ingredients);
const recipe3DifficultyLevel = getDifficultyLevel(recipe3.difficultyLevel);

recipe3.totalIngredients = recipe3TotalIngredients;

// console.log(recipe3.totalIngredients);

recipe3.difficultyLevel = getDifficultyLevel(recipe3.cookingTime);

// console.log(recipe3.difficultyLevel);

console.log(recipes);