// APP's
const galleryApp = document.querySelector('.gallery-app');

// APP's FUNCTION's
galleryApp.addEventListener('click', () => {
    innerWindow.classList.add('app');
    innerWindow.dataset.currentapp = 'gallery';
});