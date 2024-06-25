

// Adding the functionality

const form = document.querySelector("form");
const reset = document.querySelector("#reset");
const error = document.querySelector(".error");
const userName = document.querySelector("#userName");
const totalMarks = document.querySelector("#totalMarks");
const obtainMarks = document.querySelector("#obtainMarks");
const calcBtn = document.querySelector(".persBtn");
const saveName = document.querySelector(".userNameText");
const totalMarksText = document.querySelector(".totalMarksText");
const obtainMarksText = document.querySelector(".obtainMarksText");
const showPercentage = document.querySelector(".percentageText");
const resultBox = document.querySelector(".result");
const congratulation = document.querySelector(".res");





// Add the Event to calcBtn
calcBtn.addEventListener("click",validate);


// Validate and find calculation

function validate(){
    if(userName.value === "" || totalMarks === "" || obtainMarks === ""){
        error.style.opacity = 1;
    }else{
        error.style.opacity = 0;

        // Calculating the percentage
        calculate();
        
        // Clear the fields 
        userName.value = "";
        totalMarks.value = "";
        obtainMarks.value = ""; 

    }
};

// Calculate the percentage

function calculate(){
    let percentage = ((obtainMarks.value / totalMarks.value) * 100).toFixed(2);
    saveName.innerText = `Hey! ${userName.value}`;
    totalMarksText.innerText = `Your total marks is ${totalMarks.value}.`;
    obtainMarksText.innerText = `You obtained ${obtainMarks.value} marks.`
    showPercentage.innerText = `You marks percentage is ${percentage}%.`;

    showTheResultBox();
    passOrFail();
}

// Show the Result Box
function showTheResultBox(){
    resultBox.style.display = "block";
}


//Pass or fail function
function passOrFail(){
    let percentage = ((obtainMarks.value / totalMarks.value) * 100).toFixed(2);
    if( percentage < 33){
        congratulation.innerText = "Sorry! You are fail.";
    }else{
        congratulation.innerText = "Congratulation! You are pass.";
    }
}


// Stop the Default Behaviour of Form
form.addEventListener("submit",(e)=>{
    e.preventDefault();
});

// Adding functionality to Reset Button

reset.addEventListener("click",()=>{
    form.reset();
    resultBox.style.display = "none";
})

