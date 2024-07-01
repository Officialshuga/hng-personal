document.addEventListener('DOMContentLoaded', () => {
    const currentTimeElement = document.getElementById('current-time');
    const currentDayElement = document.getElementById('current-day');

    function updateTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(' ')[4];
        currentTimeElement.textContent = utcTime;

        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDay = days[now.getUTCDay()];
        currentDayElement.textContent = currentDay;
    }

    updateTime();
    console.log(updateTime)
    setInterval(updateTime, 1000); // Update every minute
});
