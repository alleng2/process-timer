const { exec } = require('child_process');
const open = require('open');

// Function to get a list of running processes in Windows
function getProcesses() {
  // Run the tasklist command to get a list of processes
  exec('tasklist', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }

    // Log the list of processes to the console
    console.log('List of processes:');
    console.log(stdout);

    // Open the default text editor with the list of processes
    open(stdout);
  });
}

// Call the function to get and display processes
getProcesses();
