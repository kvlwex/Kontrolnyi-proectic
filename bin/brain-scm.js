import readlineSync from 'readline-sync';
import { generateRandomNumbers,findLCM } from '../src/utils.js';
console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name? ');

console.log(`Hello, ${playerName}!\nFind the smallest common multiple of given numbers.`);

const playGame = () => {
  for (let i = 0; i < 3; i++) {
    const numbers = generateRandomNumbers();
    const question = numbers.join(' ');
    const userAnswer = readlineSync.question(`Question: ${question}\nYour answer: `);
    const correctAnswer = findLCM(...numbers);

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

playGame()

