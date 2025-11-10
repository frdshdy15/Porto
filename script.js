// 1. Inisialisasi AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200, // Durasi animasi dalam ms
        once: true,     // Animasi hanya terjadi sekali saat scrolling ke bawah
        easing: 'ease-in-out' // Efek transisi
    });
});

// 2. Smooth Scroll untuk Navigasi Internal
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Hanya berlaku untuk link yang bukan eksternal (email, telp, linkedin)
        if (this.getAttribute('href').length > 1 && this.getAttribute('href') !== '#') {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
