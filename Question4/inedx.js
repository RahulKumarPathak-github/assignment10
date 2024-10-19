
// Import the OS module

// Get the operating system information
console.log('Operating System Information:');
console.log(`OS Type: ${os.type()}`); // Operating system name
console.log(`Platform: ${os.platform()}`); // Platform (e.g., 'win32', 'linux')
console.log(`Architecture: ${os.arch()}`); // CPU architecture (e.g., 'x64', 'arm')
console.log(`Host Name: ${os.hostname()}`); // Computer hostname
console.log(`Home Directory: ${os.homedir()}`); // User's home directory
console.log(`System Uptime: ${os.uptime()} seconds`); // System uptime in seconds
console.log(`Total Memory: ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB`); // Total system memory
console.log(`Free Memory: ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB`); // Free system memory
console.log(`Number of CPUs: ${os.cpus().length}`); // Number of CPU cores
console.log(`Network Interfaces:${os.networkInterfaces()}`); // Network interfaces

