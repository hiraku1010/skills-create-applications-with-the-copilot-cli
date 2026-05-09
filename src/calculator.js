// Calculator module
// Supported operations:
// - Addition: + or add
// - Subtraction: - or sub or subtract
// - Multiplication: * or x or mul or multiply
// - Division: / or div or divide

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

function squareRoot(n) {
  if (n < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(n);
}

function compute(op, a, b) {
  const o = String(op).toLowerCase();
  switch (o) {
    case '+':
    case 'add':
      return add(a, b);
    case '-':
    case 'sub':
    case 'subtract':
      return subtract(a, b);
    case '*':
    case 'x':
    case 'mul':
    case 'multiply':
      return multiply(a, b);
    case '/':
    case 'div':
    case 'divide':
      return divide(a, b);
    case '%':
    case 'mod':
      return modulo(a, b);
    case '^':
    case 'pow':
    case 'power':
      return power(a, b);
    case 'sqrt':
    case 'squareroot':
      return squareRoot(a);
    default:
      throw new Error('Unsupported operation: ' + op);
  }
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
  modulo,
  power,
  squareRoot,
  compute,
};
