var readlineSync = require('readline-sync');

var score = 0;

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!' + " Let's see how well you know Vivek.");

console.log("RULE: You get 1 point for each correct answer.")

var questions = [
	{
    question :"What is Vivek's favourite hobby?",
    choices:['Football','Gym','Trekking','Cooking'],
    answer:3
  },
  {
    question:"What is Vivek's favourite show?",
    choices:['Friends','GoT','Queens Gambit','Breaking Bad'],
    answer:4
  },
  {
    question:"What is Vivek's favorite food?",
     choices:['Pasta','Pizza','Oatmeal','Biryani'],
    answer:4,
  },
  {
    question:"What is Vivek's Nickname?",
     choices:['Golu','Vicky','Vishy','Andy'],
    answer:2,
  },
  {
    question:"What is his favourite book?",
     choices:['The Brothers Karamazov','Fountainhead','Autobiography of a Yogi','Atlas Shrugged'],
    answer:3,
  },
  {
    question:"What is his personality type?",
     choices:['INTJ','ISFJ','ENTJ','ENFP'],
    answer:3,
  },
  {
    question:"What is Vivek's Home City?",
     choices:['Pune','Delhi','Lucknow','Mumbai'],
    answer:2,
  },
  {
    question:"What is his favourite movie?",
     choices:['Batman Begins','Inception','Killa','Gangs of Wasseypur'],
    answer:3,
  },
  
]

var highscores = [
  {
    name: 'Radhika',
    score: "6",
  },
  {
    name: 'Nipun',
    score: "5",
  },
]

function play(){
  for(var i = 0; i < questions.length; i++){
    console.log(questions[i].question);

    var userAnswer = readlineSync.keyInSelect(questions[i].choices,"Your Choice");

    if (userAnswer+1 === 0)
    {
      break
    }
    else{
      if(userAnswer+1 === questions[i].answer){
        console.log("You are right!")
        score++;
        console.log("Your score: "+ score);
      } else {
        console.log("You are wrong.!")
      }
    }

    
  }
}

function highscore(){
  for(var i = 0; i < highscores.length; i++)
  {
    if (score > highscores[i].score)
    {
      console.log("Yay, You have a high score. You scored: " + score)
      break;
    }
  }

  console.log("\n")
  console.log("__HIGHSCORES__")
  for(var i = 0; i < highscores.length;i++)
  {
    console.log(highscores[i].name + " >> " + highscores[i].score)
  }
}

play();
highscore();