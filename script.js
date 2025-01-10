// Добавляем класс активного состояния для изображений при их появлении в зоне видимости
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.slide-in');

    const options = {
        threshold: 0.5,
        rootMargin: "0px 0px -50px 0px"
    };

    const onScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    images.forEach(image => {
        onScroll.observe(image);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Шагающий текст
    const walkingText = document.querySelector('.walking-text p');
    const text = walkingText.textContent;
    walkingText.innerHTML = [...text]
        .map((char, index) => `<span style="animation-delay: ${index * 0.1}s;">${char}</span>`)
        .join('');

    // Музыка при наведении
    const playMusicBox = document.querySelector('.play-music p');
    const audio = document.getElementById('nature-music');

    playMusicBox.addEventListener('mouseover', () => {
        audio.play();
    });

    playMusicBox.addEventListener('mouseout', () => {
        audio.pause();
        audio.currentTime = 0;
    });
});