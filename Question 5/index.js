// Import the Path module
const path = require('path');

// Sample file path
const filePath = '/users/john/documents/project/file.txt';

// Get the directory name of the file
const dirName = path.dirname(filePath);
console.log(`Directory Name: ${dirName}`);

// Get the base name (file name with extension)
const baseName = path.basename(filePath);
console.log(`Base Name: ${baseName}`);

// Get the file name without the extension
const fileName = path.basename(filePath, path.extname(filePath));
console.log(`File Name (without extension): ${fileName}`);

// Get the file extension
const fileExt = path.extname(filePath);
console.log(`File Extension: ${fileExt}`);

// Join paths to create a new path
const newFilePath = path.join('/users', 'john', 'documents', 'project', 'newfile.txt');
console.log(`New File Path: ${newFilePath}`);

// Resolve a sequence of paths into an absolute path
const absolutePath = path.resolve('docs', 'file.txt');
console.log(`Resolved Absolute Path: ${absolutePath}`);

// Normalize the path (fixes issues with slashes or '..' or '.')
const messyPath = '/users/john/../john//documents/project/file.txt';
const normalizedPath = path.normalize(messyPath);
console.log(`Normalized Path: ${normalizedPath}`);

// Check if a path is absolute
const isAbsolutePath = path.isAbsolute(filePath);
console.log(`Is Absolute Path: ${isAbsolutePath}`);
