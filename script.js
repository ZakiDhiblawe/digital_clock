function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

document.getElementById("toggleTheme").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});
