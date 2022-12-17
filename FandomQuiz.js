let questiosSets = [
    {
      question: "What is my name ",
      answer: "Paras"
    },
    {
      question: "What is my pet name ",
      answer: "Jelly"
    },
    {
      question: "where do i live ",
      answer: "Gwalior"
    },
    {
      question: "Park near me ",
      answer: "Atal park"
    },
    {
      question: "My fav dish ",
      answer: "Palak Paneer"
    },
    {
      question: "My fav Programming language ",
      answer: "React"
    },
    {
      question: "My best Friend ",
      answer: "Manish"
    },
    {
      question: "My school ",
      answer: "DPA"
    },
    {
      question: "My college ",
      answer: "ITM"
    },
    {
      question: "Dream Job",
      answer: "SDE"
    }
  ];
  
  let highScore = [
    {
      name: 'Manish',
      score: 5
    },
    {
      name: 'Paras',
      score: 7
    }
  ]
  
  let score = 0;
  let readline = require('readline-sync');
  let name;
  
  let welcome = () => {
    name = readline.question("Welcome!, what is your name: ");
    console.log(`Welcome ${name}, i am pleased to have you on my Quiz App. There will be 10 basic questions about me that will let you know how well do you know me`)
  }
  
  let quizApp = (qa) => {
  
    let level = 1;
    // let incLevel = 2*level;  
  
    qa.forEach((x) => {
      let ans = readline.question(x.question);
      if (x.answer.toUpperCase() === ans.toUpperCase()) {
        console.log("correct");
        score++;
  
      } else {
        console.log('wrong')
        score--;
      }
      if (score === 5 || score === 10) {
        level += 1;
        console.log('---------Level up ' + level, "----------");
      }
      console.log('------------------------')
  
    });
    console.log("Total score ", score);
  
  
  };
  
  let highScoreFunc = (highScore) => {
    let newHighScore;
    let max = highScore[0].score
    let n = highScore[0].name;
    for (let i = 0; i < highScore.length; i++) {
      if (highScore[i].score > max) {
        max = highScore[i].score;
        n = highScore[i].name;
  
      }
    }
    if (score > max) {
      newHighScore = score;
      highScore.push({ name: name, score: newHighScore });
  
      console.log(`Congratulations ${name} you broke the record of ${max} of ${n} with your score of ${newHighScore}`)
      console.log("--------Leader board-------")
      highScore.map((i) => {
        console.log(i.name, " : ", i.score);
      })
  
    }
  }
  let playGame = () => {
    let play = readline.question("Hit Y to play: ");
    if (play.toUpperCase() === "Y") {
  
      welcome();
      quizApp(questiosSets);
      highScoreFunc(highScore);
    }
  }
  playGame();  