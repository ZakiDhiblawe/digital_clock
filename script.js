function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0'); // Ensure 2 digits
    const minutes = String(now.getMinutes()).padStart(2, '0'); // Ensure 2 digits
    const seconds = String(now.getSeconds()).padStart(2, '0'); // Ensure 2 digits

    // Update digital clock
    document.getElementById("clock").textContent = `${hours}:${minutes}:${seconds}`;

    // Update day and date
    document.getElementById("today").textContent = "Today";
    document.getElementById("current-date").textContent = now.toLocaleDateString('en-US');

    // Update analog clock hands
    const hourDeg = (hours % 12) * 30 + minutes * 0.5;
    const minuteDeg = minutes * 6;
    const secondDeg = seconds * 6;

    document.querySelector(".hour-hand").style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector(".minute-hand").style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector(".second-hand").style.transform = `rotate(${secondDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

// Theme Toggle
document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const icon = document.querySelector(".icon");
    icon.innerHTML = document.body.classList.contains("light-mode") ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
});

// Random Temperature Generator
function getRandomTemperature() {
    const temp = Math.floor(Math.random() * 20 + 10); // Random temp between 10°C and 30°C
    document.getElementById("temperature").textContent = `🌡️ ${temp}°C`;
}

getRandomTemperature();
setInterval(getRandomTemperature, 60000); // Update temperature every minute