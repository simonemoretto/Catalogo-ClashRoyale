let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');
const totalImages = images.length;
let autoSlideInterval;

// Funzione per mostrare l'immagine
function showImage(index) {
    // Rimuove la classe active da tutte le immagini e i dot
    images.forEach(img => img.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));

    // Aggiunge la classe active all'immagine e al dot corrente
    images[index].classList.add('active');
    dots[index].classList.add('active');

    // Aggiorna l'indice
    currentImageIndex = index;

    // Resetta l'autoplay
    resetAutoSlide();
}

// Funzione per andare all'immagine successiva
function nextImage() {
    let nextIndex = (currentImageIndex + 1) % totalImages;
    showImage(nextIndex);
}

// Funzione per andare all'immagine precedente
function previousImage() {
    let prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
    showImage(prevIndex);
}

// Funzione per andare a un'immagine specifica
function currentImage(index) {
    showImage(index);
}

// Autoplay: cambia immagine ogni 6 secondi
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        nextImage();
    }, 6000);
}

// Resetta l'autoplay
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Avvia l'autoplay all'inizio
window.addEventListener('load', () => {
    startAutoSlide();
});

// Tastiera: frecce sinistra e destra
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
        previousImage();
    } else if (event.key === 'ArrowRight') {
        nextImage();
    }
});
