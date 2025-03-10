function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Update digital clock
    document.getElementById("clock").textContent = now.toLocaleTimeString();

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

// Get Real Temperature from Browser Geolocation
function getTemperature() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            const apiKey = "YOUR_OPENWEATHERMAP_API_KEY"; // Replace with your API key
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);
            const data = await response.json();
            const temp = Math.round(data.main.temp);
            document.getElementById("temperature").textContent = `🌡️ ${temp}°C`;
        });
    } else {
        document.getElementById("temperature").textContent = "🌡️ N/A";
    }
}

getTemperature();