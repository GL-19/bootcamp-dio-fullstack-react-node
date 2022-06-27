function getValidNumber() {
  let num = parseFloat(gets());
  while(num > 10 || num < 0) {
    console.log("nota invalida");
    num = parseFloat(gets());
  };
  return num;
}

let keepRunning = true;

while(keepRunning) {
  let numA = getValidNumber();
  let numB = getValidNumber();

  let average = (numA + numB) / 2; 
  console.log(`media = ${average.toFixed(2)}`)

  let validResponse = false;
  let response;
  while(!validResponse) {
    response = gets();
    console.log("novo calculo (1-sim 2-nao)")
    if(response === '1') {
      keepRunning = true;
      break;
    }
    if(response === '2') {
      keepRunning = false;
      break;
    }
  } 
}
