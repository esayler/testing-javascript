describe('square', function () {

  it('returns the square of a number', function () {
    assert.equal(square(2), 4);
  });

});

describe('addTwo', function () {

  it('returns the sum of two numbers', function () {
    assert.equal(addTwo(2, 5), 7);
  });

});

describe('multiply', function () {

  it('returns the product of two numbers', function () {
    assert.equal(multiply(3, 4), 12);
  });

});

describe('subtract', function () {

  it('returns the difference of two numbers', function () {
    assert.equal(subtract(10, 5), 5);
  });

});

describe('divide', function () {

  it('returns the quotient of two numbers', function () {
    assert.equal(divide(10, 5), 2);
  });

});

describe('fizBuzz', function () {
  it('returns the number passed to it', function () {
    assert.equal(fizBuzz(1), 1);
  });

  it('returns "Fizz" if the number passed to it is a multiple of 3', function () {
    assert.equal(fizBuzz(3), 'Fizz');
  });

  it('returns "Buzz" if the number passed to it is a multiple of 5', function () {
    assert.equal(fizBuzz(5), 'Buzz');
  });

  it('returns "FizzBuzz" if the number passed to it is a multiple of 3 and 5', function () {
    assert.equal(fizBuzz(15), 'FizzBuzz');
  });

});
