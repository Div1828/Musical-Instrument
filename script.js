const toggleButton = document.getElementById('toggledarkmode');

toggleButton.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  toggleButton.textContent = document.documentElement.classList.contains('dark') ? 'LIGHT' : 'DARK';
});




const sounds = {
  A:"kick drum.wav", S:"snare drum.wav", D:"hi-hat closed.wav", F:"hi-hat open.wav", G:"tom 1.wav", H:"tom 2.wav", J:"crash cymbal.wav", K:"ride cymbal.wav"
}

function playSound(key) {
  const button = document.querySelector(`.drum-button[data-key="${key}"]`);
  const soundFile = sounds[key];
  if (!soundFile){ 
    return;
  } 
  const audio = new Audio(`./sounds/${soundFile}`);


  if (button) {

    audio.play();

    button.classList.add('pressed');
    setTimeout(() => {
      button.classList.remove('pressed');
    }, 200);
  }
}


document.addEventListener('keydown', (e) => {
  const key = e.key.toUpperCase();
  playSound(key);
});


document.querySelectorAll('.drum-button').forEach((button) => {
  button.addEventListener('click', () => {
    const key = button.dataset.key;
    playSound(key);
  });
});




