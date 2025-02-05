/***
Autor: Adrian Emiliano Rodriguez Santiesteban
Fecha: 02/05/2024
Lenguaje html
Fuente: local
Examen
***/

document.addEventListener('DOMContentLoaded', () => {
    if (document.body.classList.contains('pagina-carrusel')) {
        const images = document.querySelectorAll('.carousel-images img');
        let currentIndex = 0;

        function showImage(index) {
            const carouselImages = document.querySelector('.carousel-images');
            carouselImages.style.transform = `translateX(-${index * 100}%)`;
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            showImage(currentIndex);
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                nextImage();
            } else if (event.key === 'ArrowLeft') {
                prevImage();
            }
        });
    }
});