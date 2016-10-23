// Here is an example.
function square(n) {
  return n * n;
}

function addTwo(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function fizBuzz(num) {
  if ( num % 3 === 0 && num % 5 === 0 ) {
    return 'FizzBuzz';
  } else if ( num % 3 === 0 ) {
    return 'Fizz';
  } else if (num % 5 === 0){
    return 'Buzz';
  } else {
    return num;
  }
}

