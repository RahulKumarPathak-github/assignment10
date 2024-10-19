const fs = require('fs');

// The file paths
const inputFile = 'input.txt';  // Replace with the actual input file path
const outputFile = 'output.txt'; // Replace with the actual output file path

// Read content from the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
    }

    // Write the content to the output file
    fs.writeFile(outputFile, data, (err) => {
        if (err) {
            console.error(`Error writing to the file: ${err}`);
            return;
        }

        console.log(`Content successfully written to ${outputFile}`);
    });
});
