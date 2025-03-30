document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('backgroundMusic');

    function playMusic() {
        if (music.paused) {
            music.muted = false;
            music.play().then(() => {
                console.log("Music started playing automatically");
            }).catch(error => {
                console.error("Error playing music:", error);
                document.addEventListener('click', () => {
                    music.muted = false;
                    music.play().catch(err => console.error("Error on user interaction", err));
                }, { once: true });
            });
        } else {
            music.muted = false;
        }
    }
    playMusic();

    const message = "Mohon maaf atas segala kesalahan dan khilaf semoga tali silaturahmi tetap terjaga.";
    const messageElement = document.getElementById('message-text');
    let index = 0;

    function typeWriter() {
        if (index < message.length) {
            messageElement.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    typeWriter();
});
