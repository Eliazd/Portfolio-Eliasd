// 1. Βρίσκουμε το κουμπί από την HTML χρησιμοποιώντας το ID του
const button = document.getElementById('discordbutton');

// 2. Λέμε στο κουμπί να "ακούει" για το click του χρήστη
button.addEventListener('click', function() {
    
    // 3. Όταν πατηθεί, άνοιξε το link σε νέα καρτέλα
    window.open('https://discordapp.com/users/1130487418244579350', '_blank');
    
});