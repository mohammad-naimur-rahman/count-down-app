let clickCount = 0;
//let timeInMiliSecond;
document.getElementById('start-btn').addEventListener('click', function () {
    let hoursInput = document.getElementById('hours').value;
    let minutesInput = document.getElementById('minutes').value;
    let secondsInput = document.getElementById('seconds').value;
    if (hoursInput != '' || minutesInput != '' || secondsInput != '') {
        countDown();
    }

    clickCount++;

    if (clickCount != 1 && (clickCount + 1) % 2 == 0) {
        timeGot = document.getElementById('remaining-time').innerText;
        timeInMiliSecond = parseInt(timeGot);
        const time = setInterval(() => {
            timeInMiliSecond -= 10;
            const remainingHour = Math.floor(timeInMiliSecond / (1000 * 3600));
            const remainingMinute = Math.floor((timeInMiliSecond / (1000 * 60)) - (remainingHour * 60));
            const remainingSecond = Math.floor((timeInMiliSecond / 1000) - ((remainingMinute * 60) + (remainingHour * 3600)));
            const reminingMsecond = Math.floor((timeInMiliSecond - ((remainingHour * (3600 * 1000)) + (remainingMinute * (60 * 1000)) + (remainingSecond * 1000))));
            document.getElementById("second-remaining").innerText = remainingSecond;
            document.getElementById("minute-remaining").innerText = remainingMinute;
            document.getElementById("hour-remaining").innerText = remainingHour;
            document.getElementById("msecond-remaining").innerText = reminingMsecond;

            const startBtn = document.getElementById('start-btn');
            startBtn.innerText = 'Pause';
            startBtn.classList.remove('btn-success');
            startBtn.classList.add('btn-warning');

            if (clickCount % 2 == 0) {
                clearInterval(time);
                startBtn.classList.add('btn-success');
                startBtn.classList.remove('btn-warning');
                startBtn.innerText = 'Resume';
                document.getElementById('complete-info').innerText = 'Countdown paused';
                document.getElementById('remaining-time').innerText = (((remainingHour * 3600) + (remainingMinute * 60) + remainingSecond) * 1000) + reminingMsecond;
            }

            if (remainingHour == 0 && remainingMinute == 0 && remainingSecond == 0 && reminingMsecond == 0) {
                clearInterval(time);
                document.getElementById('complete-info').innerText = 'Countdown completed';
            }
        }, 10);
        document.getElementById('complete-info').innerText = '';
    }
})

function countDown() {
    let hoursInput = document.getElementById('hours').value;
    let minutesInput = document.getElementById('minutes').value;
    let secondsInput = document.getElementById('seconds').value;
    let hoursInt = hoursInput ? parseInt(hoursInput) : 0;
    let minutesInt = minutesInput ? parseInt(minutesInput) : 0;
    let secondsInt = secondsInput ? parseInt(secondsInput) : 0;
    let timeInMiliSecond = (hoursInt * 3600 + minutesInt * 60 + secondsInt) * 1000;
    const time = setInterval(() => {
        timeInMiliSecond -= 10;
        const remainingHour = Math.floor(timeInMiliSecond / (1000 * 3600));
        const remainingMinute = Math.floor((timeInMiliSecond / (1000 * 60)) - (remainingHour * 60));
        const remainingSecond = Math.floor((timeInMiliSecond / 1000) - ((remainingMinute * 60) + (remainingHour * 3600)));
        const reminingMsecond = Math.floor((timeInMiliSecond - ((remainingHour * (3600 * 1000)) + (remainingMinute * (60 * 1000)) + (remainingSecond * 1000))));
        document.getElementById("second-remaining").innerText = remainingSecond;
        document.getElementById("minute-remaining").innerText = remainingMinute;
        document.getElementById("hour-remaining").innerText = remainingHour;
        document.getElementById("msecond-remaining").innerText = reminingMsecond;

        const startBtn = document.getElementById('start-btn');
        startBtn.innerText = 'Pause';
        startBtn.classList.remove('btn-success');
        startBtn.classList.add('btn-warning');

        if (clickCount % 2 == 0) {
            clearInterval(time);
            startBtn.classList.add('btn-success');
            startBtn.classList.remove('btn-warning');
            startBtn.innerText = 'Resume';
            document.getElementById('complete-info').innerText = 'Countdown paused';
            document.getElementById('remaining-time').innerText = (((remainingHour * 3600) + (remainingMinute * 60) + remainingSecond) * 1000) + reminingMsecond;
        }

        if (remainingHour == 0 && remainingMinute == 0 && remainingSecond == 0 && reminingMsecond == 0) {
            clearInterval(time);
            document.getElementById('complete-info').innerText = 'Countdown completed';
        }
    }, 10);
    document.getElementById('hours').value = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
    document.getElementById('complete-info').innerText = '';
}

document.getElementById('reset-btn').addEventListener('click', function () {
    location.reload();
});