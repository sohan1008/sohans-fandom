var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;
var highest = 20;
// input >> processing >> output
var userName = readlineSync.question(chalk.red("Hello there,what's your name? "));

console.log(chalk.blue("Welcome " + userName + " to HOW WELL DO YOU KNOW Sohan?"));
console.log(chalk.green("The instructions are: "));
console.log(chalk.bgYellow("i) There are 4 questions which have to be answered mandatorily."));
console.log(chalk.bgYellow("ii) Each correct answer will award you 5 points."));
console.log(chalk.bgYellow("iii) 2 points will be deducted for every incorrect answer provided by."));
console.log(chalk.bold.cyan("Leaderboard: "));
console.log(chalk.bold.cyan("Name         Points "));
console.log(chalk.bgMagenta("Ritesh          20 "));


// play function
function play(qs) {
  var noofquestions = questions.length;
  for (i = 0; i < noofquestions; i++) {
    console.log(chalk.bold("QUESTION NO: ", i + 1));
    console.log(chalk.bgBlue.bold(qs[i].question));
    var userAnswer = readlineSync.question(chalk.bgRed("a:" + qs[i].options.a + "\n" + "b:" + qs[i].options.b + "\n" + "c:" + qs[i].options.c + "\n\n"));

    if (qs[i].answer.toLowerCase() === userAnswer.toLowerCase()) {
      console.log(chalk.bgGreen("Thats right!"));
      score += 5;
      console.log(chalk.bold.bgGreen("Your current score is:" + score));

    } else {
      console.log(chalk.bgRed("Sorry,you got that wrong!"));
      score -= 2;
      console.log(chalk.bold.bgRed("Your current score is:" + score));
    }
    console.log("-------------");
  }
  console.log(chalk.bgBlue("Congratulations! Your score is:" + score));
  if (score == highest) {
    if(score>highest){
    console.log(chalk.bgBlue("You just beat the highest score.You are now in the number 1 spot :)"));
    console.log(chalk.bold("Send me a screenshot of your score so that i can update it in the leaderboard section."))  
    }
    console.log(chalk.bgBlue("You just equalled the highest score"));
    console.log(chalk.bold("Send me a screenshot of your score so that i can update it in the leaderboard section."))
  }
  console.log(chalk.bold.bgBlue("Thank you for taking time to play this quiz.Have a nice day"));
}

var questions = [{
  question: "Where do I reside? ",
  answer: "a",
  options: {
    a: "Bangalore",
    b: "Mumbai",
    c: "Hyderabad"
  }
}, {
  question: "My favorite sport would be? ",
  answer: "c",
  options: {
    a: "Cricket",
    b: "Badminton",
    c: "Football"
  }
},
{
  question: "Where do I work? ",
  answer: "b",
  options: {
    a: "Infosys",
    b: "Accenture",
    c: "Brillio"
  }
},
{
  question: "Which is my favourite movie?",
  answer: "a",
  options: {
    a: "Shawshank Redemption",
    b: "Catch Me If You Can",
    c: "Conjuring"
  }
}];

play(questions);





