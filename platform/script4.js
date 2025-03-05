const audioFiles = Array.from({ length: 10 }, (_, i) => `../indir/auditoryText/audio_${i + 1}.mp3`);

let currentAudioIndex = 0;
const audioElement = document.querySelector("audio");
const options = document.querySelectorAll(".options input");

function loadAudio(index) {
    if (index >= audioFiles.length) return (window.location.href = "step5.html");

    audioElement.src = audioFiles[index];
    audioElement.load();
    audioElement.play();

    options.forEach(option => (option.checked = false));
    startTimer(60, () => loadAudio(++currentAudioIndex));
}

function startTimer(seconds, callback) {
    const timerElement = document.getElementById("timer");
    const progressCircle = document.querySelector(".timer-circle");
    const totalLength = progressCircle.getTotalLength();
    progressCircle.style.strokeDasharray = totalLength;

    let remaining = seconds;
    timerElement.textContent = `${remaining}s`;

    const interval = setInterval(() => {
        timerElement.textContent = `${--remaining}s`;
        progressCircle.style.strokeDashoffset = totalLength * (remaining / seconds);

        if (remaining <= 0) {
            clearInterval(interval);
            callback();
        }
    }, 1000);
}

loadAudio(currentAudioIndex);
