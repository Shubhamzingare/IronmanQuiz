//font color 
const clc = require('cli-color');

console.log(clc.green("Welcome to this little quiz about Ironman.\nHave fun!!\n"));

var readLine = require("readline-sync");

//declare a variable to store username
var userName = readLine.question(clc.green("May I know your name?\n\n"));
console.clear();

//print the user name with greeting message
console.log(clc.green("Hello! " + userName + ",\nLet's see how much you know about Ironman 😉\n"));

//declare variable to store score
var score = 0;

//declare variable to store total score 
var totalScore = 0;

var response = readLine.question(clc.green("Shall we starts? Enter [y/n] \n"));
console.clear();

//Questions
question1 = "1. In what country does the film start ?\n\n a.United States \n b.France \n c.Afghanistan \n d.China  \n\n ";
question2 = "2. What's the name of the computer program that runs Tony's operations ? \n\n a.Jaguar \n b.Jarvis \n c.Jagger \n d.Mavis  \n\n";
question3 = "3. When Tony is abducted, what do his captors want him to make for them? \n\n a.A bomb \n b.An airplane \n c.A missile \n d.None of the above  \n\n";
question4 = "4. What is the name of Tony's company?\n\n a.Stark Corporation \n b.Stark Industries \n c.Stark Experiments \n d.Stark & Stark  \n\n";

while(response == "y")
  {
    funquiz(clc.blue(question1),"c");
    funquiz(clc.blue(question2),"b");
    funquiz(clc.blue(question3),"c");
    funquiz(clc.blue(question4),"c");
  
    response = readLine.question(clc.blue("\nDo you want to contine ? [y/n] : \n"));
    console.clear();
  }

  function funquiz(question,answer)
    {
   
    var userAnswer = readLine.question(question);
      
      if (answer.toUpperCase() == userAnswer.toUpperCase() ) 
      {
        console.clear();
        console.log(clc.yellow("\nDamn good bro !!! You are absolutely right 😍👍 \n"));
        score++;
        
        totalScore++;
      }
    else
      {
        console.clear();
        console.log(clc.red("\nYou are wrong bro! 😒 \nGive a try once again ✌️\n"));
        score--;
      }
  }

  console.clear();
  console.log(clc.green("Wohh 😍 !! Your score is : " + score + "\noutoff total score : " + totalScore ));

