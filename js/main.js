function playSound(e) {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    const sound = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!sound) return;
    sound.play();
    sound.currentTime = 0;
    key.classList.add('playing');
};

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing')
}

const key = document.querySelectorAll(`.key`);
key.forEach(key => {
    key.addEventListener('transitionend', removeTransition)
})
window.addEventListener('keydown', playSound)