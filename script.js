// 1. Βρίσκουμε το κουμπί από την HTML χρησιμοποιώντας το ID του
const button = document.getElementById('discordbutton');

// 2. Λέμε στο κουμπί να "ακούει" για το click του χρήστη
button.addEventListener('click', function() {
    
    // 3. Όταν πατηθεί, άνοιξε το link σε νέα καρτέλα
    window.open('https://discordapp.com/users/1130487418244579350', '_blank');
    
});



const coolMusic = document.getElementById('music');
const soundButton = document.getElementById('sound-button')
const volumeSlider = document.getElementById('volume-slider')
let coolMusicPlaying = false;
soundButton.addEventListener('click', () => {
    if (coolMusicPlaying) {
        coolMusic.pause();
        soundButton.textContent = 'Play Music';
        volumeSlider.classList.remove('visible')
    } else {
        coolMusic.play();
        soundButton.textContent = 'Stop Music';
        volumeSlider.classList.add('visible');
    }
    coolMusicPlaying = !coolMusicPlaying;
});

volumeSlider.addEventListener('input', () => { 
    coolMusic.volume = volumeSlider.value;
});