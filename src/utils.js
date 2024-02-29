export const generateRandomNumbers = () => {
    const numbers = [];
    for (let i = 0; i < 3; i++) {
      numbers.push(Math.floor(Math.random() * 10) + 1);
    }
    return numbers;
  };
  
  export const findLCM = (...numbers) => {
    const maxNumber = Math.max(...numbers);
    let lcm = maxNumber;
  
    while (true) {
      if (numbers.every((number) => lcm % number === 0)) {
        return lcm;
      }
      lcm += maxNumber;
    }
  };