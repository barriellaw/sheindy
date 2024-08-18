if ('ontouchstart' in document.documentElement) {
    const elements = document.querySelectorAll('[id^="gift-img-"]');
    elements.forEach((el) => {
        el.addEventListener('touchstart', function () {
            this.classList.toggle('hover');
        });
    });
}