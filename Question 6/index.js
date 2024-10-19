// Get command-line arguments
const args = process.argv.slice(2); // Skips first two arguments (node and filename)

// Check if we have the right number of arguments
if (args.length !== 3) {
    console.log('Usage: node calculator.js <operation> <num1> <num2>');
    console.log('Operations: add, subtract, multiply, divide');
    process.exit(1);
}

// Extract operation and numbers
const operation = args[0];
const num1 = parseFloat(args[1]);
const num2 = parseFloat(args[2]);

// Check if the inputs are valid numbers
if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Both arguments must be valid numbers.');
    process.exit(1);
}

// Perform the chosen operation
switch (operation) {
    case 'add':
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case 'subtract':
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case 'multiply':
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case 'divide':
        if (num2 === 0) {
            console.error('Error: Division by zero is not allowed.');
        } else {
            console.log(`${num1} / ${num2} = ${num1 / num2}`);
        }
        break;
    default:
        console.error('Error: Invalid operation. Use add, subtract, multiply, or divide.');
        break;
}
