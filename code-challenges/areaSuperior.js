let typeOfCalc = gets();
let sum = 0;
let avg;
let size = 12;
let count = 0;
let currentValue;

for (let i = 0; i < size; i++) {
	for (let j = 0; j < size; j++) {
    currentValue = Number(gets())
    if(j > i  && j < size - 1 - i) {
      sum += currentValue;
      count++;
    }
  }
}

avg = (sum / count).toFixed(1);
sum = sum.toFixed(1);


typeOfCalc === "S" ? console.log(sum) : console.log(avg);

