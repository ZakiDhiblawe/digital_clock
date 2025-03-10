function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update digital clock
    document.getElementById("clock").textContent = now.toLocaleTimeString();

    // Update day and date
    document.getElementById("day").textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    document.getElementById("date").textContent = now.toLocaleDateString('en-US');

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

document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
    const icon = document.querySelector(".icon");
    icon.textContent = document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// Simulated temperature (can be updated with API)
document.getElementById("temperature").textContent = `🌡️ ${Math.floor(Math.random() * 10 + 20)}°C`;
