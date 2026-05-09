#!/usr/bin/env node
// Node.js CLI Calculator
// Supported operations:
// - Addition: + or add
// - Subtraction: - or sub or subtract
// - Multiplication: * or x or mul or multiply
// - Division: / or div or divide

function parseNumber(v) {
  const n = Number(v);
  if (Number.isNaN(n)) {
    console.error(`Invalid number: ${v}`);
    process.exit(2);
  }
  return n;
}

function compute(op, a, b) {
  switch (op) {
    case '+': case 'add': return a + b;
    case '-': case 'sub': case 'subtract': return a - b;
    case '*': case 'x': case 'mul': case 'multiply': return a * b;
    case '/': case 'div': case 'divide':
      if (b === 0) {
        console.error('Error: Division by zero');
        process.exit(3);
      }
      return a / b;
    default:
      console.error(`Unsupported operation: ${op}`);
      process.exit(2);
  }
}

function printUsage() {
  console.log('Usage: node src/index.js <operator> <number1> <number2>');
  console.log('Operator aliases: +, add, -, sub, *, x, mul, /, div');
}

const [, , opArg, aArg, bArg] = process.argv;
if (opArg && aArg && bArg) {
  const a = parseNumber(aArg);
  const b = parseNumber(bArg);
  const result = compute(opArg.toLowerCase(), a, b);
  console.log(result);
  process.exit(0);
}

// Interactive mode if args not provided
const readline = require('readline').createInterface({ input: process.stdin, output: process.stdout });
readline.question('Enter operation and two numbers (e.g. + 2 3): ', answer => {
  const parts = answer.trim().split(/\s+/);
  if (parts.length !== 3) {
    printUsage();
    readline.close();
    process.exit(2);
  }
  const [op, sA, sB] = parts;
  const a = parseNumber(sA);
  const b = parseNumber(sB);
  const result = compute(op.toLowerCase(), a, b);
  console.log(result);
  readline.close();
});
