const { exec } = require('child_process');

// Function to kill a process by name
function killProcess(processName) {
  // Run the taskkill command to terminate the process
  exec(`taskkill /F /IM ${processName}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }

    // Log the output to the console
    console.log(`Process ${processName} terminated:\n${stdout}`);
  });
}

// Example: Kill a process named "example.exe"
killProcess('example.exe');