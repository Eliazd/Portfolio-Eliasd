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





particlesJS("particles-js", {
  particles: {
    number: {
      value: 80, /* Πόσα σωματίδια θα υπάρχουν */
      density: { enable: true, value_area: 800 }
    },
    color: {
      value: "#a855f7" /* Το μωβ neon χρώμα σου! */
    },
    shape: {
      type: "circle" /* Σχήμα (κύκλος) */
    },
    opacity: {
      value: 0.6,
      random: true, /* Κάποια θα είναι πιο φωτεινά, κάποια πιο σβηστά */
      anim: { enable: false }
    },
    size: {
      value: 4, /* Μέγεθος των pixel */
      random: true
    },
    line_linked: {
      enable: true, /* Ενώνει τα σωματίδια με γραμμές μεταξύ τους */
      distance: 150,
      color: "#a855f7",
      opacity: 0.2,
      width: 1
    },
    move: {
      enable: true,
      speed: 2, /* Ταχύτητα κίνησης */
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab" /* Όταν πας κοντά το ποντίκι, οι γραμμές θα "γραπώνουν" το mouse */
      },
      onclick: {
        enable: true,
        mode: "push" /* Όταν κάνεις κλικ, θα γεννιούνται νέα σωματίδια */
      },
      resize: true
    }
  },
  retina_detect: true
});


const creeper = document.getElementById('creeper-egg');
const soundBoom = document.getElementById('sound-boom');

creeper.addEventListener('click', () => {
    // 1. Παίζει ο ήχος της έκρηξης (αν υπάρχει το αρχείο)
    if (soundBoom) {
        soundBoom.play().catch(() => {});
    }

    // 2. Η οθόνη αναβοσβήνει κόκκινη/άσπρη (Flash-bang εφέ)
    document.body.classList.add('flash-bang');
    
    // 3. Ο Creeper εξαφανίζεται αμέσως λόγω της έκρηξης
    creeper.style.display = 'none';

    // 4. Μετά από 3 δευτερόλεπτα η οθόνη ηρεμεί και ο Creeper κάνει Respawn!
    setTimeout(() => {
        document.body.classList.remove('flash-bang');
        creeper.style.display = 'block';
    }, 3000);
});


// 1. Βρίσκουμε το στοιχείο της HTML
const welcomeText = document.getElementById('welcome-text');

// 2. Παίρνουμε την τρέχουσα ώρα από το σύστημα
const currentHour = new Date().getHours();

// 3. Ελέγχουμε την ώρα και αλλάζουμε το μήνυμα
if (currentHour >= 5 && currentHour < 12) {
    welcomeText.textContent = "Good Morning! Welcome to my space ☀️";
} 
else if (currentHour >= 12 && currentHour < 18) {
    welcomeText.textContent = "Good Afternoon! Developing the future ⚡";
} 
else if (currentHour >= 18 && currentHour < 22) {
    welcomeText.textContent = "Good Evening! Thanks for stopping by 🌌";
} 
else {
    // Από τις 10 το βράδυ μέχρι τις 5 το πρωί
    welcomeText.textContent = "Welcome Back, Night Owl! 🦉";
}