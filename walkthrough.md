# Stopwatch App

A stopwatch application built using **Vanilla JavaScript** and styled with **Bootstrap**.

## 🚀 Features
- **Start Timer** → Starts the stopwatch from 0 or resumes from the last stopped time.
- **Stop Timer** → Pauses the stopwatch.
- **Reset Timer** → Stops the timer and resets it to 0.
- **Minimal UI** → Clean and modern design using Bootstrap.

## 🛠️ Working Logic
1. The **HTML structure** is dynamically created using JavaScript and injected into `document.body`.
2. The timer is managed using **JavaScript's `setInterval()` function**, which increments the seconds count every 1000ms (1 second).
3. When the **Start** button is clicked, `setInterval()` begins counting.
4. When the **Stop** button is clicked, `clearInterval()` pauses the timer.
5. When the **Reset** button is clicked, the counter resets to 0, and the display updates.
6. `isRunning` flag prevents multiple `setInterval()` instances from running simultaneously.
7. Bootstrap is used for styling the stopwatch interface, ensuring a clean and user-friendly design.