
const questions = [
    {
        category:"person",
        question:"Which of these names isn't a person's name?",
        choices:["Pedro","gym","Monic"],
        answer:"gym"
    },
     {
        category:"colors",
        question:"Which of the colors is not a primary color?",
        choices:["green","red","white"],
        answer:"white"
    },
     {
        category:"car",
        question:"Which of the options is a car brand?",
        choices:["bird","house","Fiat"],
        answer:"Fiat"
    },
     {
        category:"sports",
        question:"Which of these is an extreme sport?",
        choices:["mountaineering","basketball","volleyball"],
        answer:"mountaineering"
    },
     {
        category:"country",
        question:"Which of the options is a country?",
        choices:["Brazil","New York","Amsterdan"],
        answer:"Brazil"
    }
];


function getRandomQuestion(arr){
    const questinRand = arr[Math.floor(Math.random() * arr.length)];
    return questinRand;
};

const questionSelect = getRandomQuestion(questions);

function getRandomComputerChoice(choice){
    const choiceRandom = choice[Math.floor(Math.random() * choice.length)];
    return choiceRandom;
};

const choiseSelected = getRandomComputerChoice(questionSelect.choices)

function getResults(question,choice){
    if(choice === question.answer){
        return "The computer's choice is correct!";
    }else{
        return "The computer's choice is wrong. The correct answer is: "+question.answer;
    }
};

console.log(getResults(questionSelect, choiseSelected));