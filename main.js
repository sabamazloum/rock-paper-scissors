 const number = 20;

//  if (number >=10 && number <=20)
// {
//     console.log("number is between 10 and 20");
// }
// else {
//     console.log("another number")
// }

// number >= 10 && number <= 20 ? console.log("number is between 10 and 20") : console.log("another number")

// alert (" hello world")

// const age = prompt("enter youe age"); 

// if (age <= 40)
// {
//     console.log("you are yaung");
// }
// else 
// {
//     console.log("you are old")
// }

// age >= 40 ? console.log("you are old") : console.log("you are yaung")

// const result = confirm(" are you sure?")
// // console.log(result)
// if (result){
//     console.log("you said yes");
// }
// else{
//     console.log("you said cancel")
// }

// this is test for vs code git

const choices = ["rock", "paper" , "scissors"]


const userchoice = prompt("choose rock, paper, scissors")
if (userchoice){
    console.log(`you choose: ${userchoice}`);
}
else{
    console.log("your cheated!")
}

const randomnumber = Math.floor(Math.random() *3);
const computerChoice = choices[randomnumber];
console.log(`Computer chooses: ${computerChoice}`);

if (userchoice === computerChoice) {
    console.log("It's a tie");
 } 
 else if(userchoice === "rock") {
        if(computerChoice === "scissors"){
            console.log( "you win!");
        }
        else{
            console.log("you lose!")
        }  
    }
    else if ( userchoice === "rock") {
    if(computerChoice === "paper"){ 
        console.log("computer win");  
    }
    console.log("you win")
}
else if(userchoice === "paper"){
    if(computerChoice === "rock"){
        console.log("you win");
    }
    console.log("computer win")
}
else if(userchoice === "paper"){
    if( computerChoice === "scissors"){
        console.log("you win");
    }
    console.log("computer win")
}
else if (userchoice === "scissors"){
    if(computerChoice === "paper"){
        console.log("you win");
    }
    console.log("computer win")
}
else if (userchoice === "scissors"){
    if(computerChoice === "rock"){
        console.log("computer win");
    }
    console.log("you win")
}