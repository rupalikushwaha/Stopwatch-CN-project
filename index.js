// Initialize variables
let timer;
let isRunning = false;
let hours = 0, minutes = 0, seconds = 0;

// Function to start or stop the stopwatch
function startStop() {
    if (isRunning) {
        // Stop the timer
        clearInterval(timer);
        // Change the button text to "Start"
        document.getElementById('startStop').textContent = 'Start';
    } else {
        // Start the timer and update time every second
        timer = setInterval(updateTime, 1000);
        // Change the button text to "Stop"
        document.getElementById('startStop').textContent = 'Stop';
    }
    isRunning = !isRunning; // Toggle the running state
}

// Function to reset the stopwatch
function reset() {
    clearInterval(timer); // Stop the timer
    isRunning = false; // Set running state to false
    // Reset hours, minutes, and seconds to 0
    hours = 0;
    minutes = 0;
    seconds = 0;
    displayTime(); // Display the reset time
    document.getElementById('startStop').textContent = 'Start'; // Change the button text to "Start"
}

// Function to update the time
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime();
}

 // Function to display the time
 function displayTime() {
    const h = String(hours).padStart(2, '0');
    const m = String(minutes).padStart(2, '0');
    const s = String(seconds).padStart(2, '0');
    document.getElementById('display').textContent = `${h}:${m}:${s}`;
}

// Add event listeners to buttons
document.getElementById('startStop').addEventListener('click', startStop);
document.getElementById('reset').addEventListener('click', reset);