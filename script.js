//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function () {
  const buttonContainer = document.getElementById('buttons');
  const sounds = ['sound1.mp3', 'sound2.mp3', 'sound3.mp3']; // Add your sound file names

  // Create buttons dynamically
  sounds.forEach((sound, index) => {
    const button = document.createElement('button');
    button.className = 'btn';
    button.textContent = `Play Sound ${index + 1}`;
    button.addEventListener('click', () => playSound(`sounds/${sound}`));
    buttonContainer.appendChild(button);
  });

  // Create stop button
  const stopButton = document.createElement('button');
  stopButton.className = 'stop';
  stopButton.textContent = 'Stop';
  stopButton.addEventListener('click', stopAudio);
  buttonContainer.appendChild(stopButton);
});

let audio;

function playSound(soundFile) {
  // Stop the currently playing audio, if any
  stopAudio();

  // Create a new audio element
  audio = new Audio(soundFile);
  audio.play();
}

function stopAudio() {
  // Check if audio is currently playing and stop it
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}
