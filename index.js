console.log("Fill out the form below to build a team project page")
const fs =require('fs')
const path = require('path')
const inquirer =require('inquirer')
const createCards = require('./populateHTML')

const anyMore = inquirer.prompt({ 
    type:"list",
    message:"Are there any more team members?",
    choices:[
        "Yes",
        "No",
    ],
    name:"question"
})

const questions = [
    {
        type: 'list',
        message: "What is your position?",
        choices: [
            "Engineer",
            "Project Manager",
            "Intern", 
        ],
        name: 'position',
    },
    {
        type: "input",
        message:"What is your name?",
        name:"name",
    },
    {
        type: "input",
        message: "what is your ID number?",
        name: "ID",
    },
    {
        type:"input",
        message: "what is your email address?",
        name: "email",
    },


]  

      
    const askQuestion = () =>{
    inquirer.prompt(questions)
        .then((data) =>{
              
        })}
        
        
      