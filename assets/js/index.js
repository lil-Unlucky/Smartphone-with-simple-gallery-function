const app = document.querySelector('.smartphone-app');
if(app) {
    const innerWindow = document.querySelector('.smartphone-app__inner-window'); // Экран телефона
    const homeButton = document.querySelector('.smartphone-home-button'); // Кнопка домой
    homeButton.addEventListener('click', () => openOs(innerWindow));
} else {
    alert('Не удалось инициализировать приложение!');
    console.error('Не удалось инициализировать "Smartphone app".', 404);
}

async function openGalleryApp(innerWindow) {
    await fetch('assets/app/gallery.html')
   .then(response => response.text())
   .then(html => {
        innerWindow.innerHTML = html;
        const closeApp = document.querySelector('.close-app-btn');
        closeApp.addEventListener('click', () => openOs(innerWindow));

        const currentImg = document.querySelector('.gallery-current-image img');
        const imageList = document.querySelectorAll('.gallery-pic img');
        imageList.forEach(image => {
            image.addEventListener('click', () => {
                currentImg.src = image.src;
            });
        });
    })
   .catch(error => console.log('::error::', error));
}

async function openOs(innerWindow) {
    await fetch('assets/app/os.html')
    .then(response => response.text())
    .then(html => {
            innerWindow.innerHTML = html;
            innerWindow.dataset.currentapp = 'window';
            innerWindow.classList.remove('app');

            const galleryApp = document.querySelector('.gallery-app');
            galleryApp.addEventListener('click', () => {
                innerWindow.dataset.currentapp = 'gallery';
                innerWindow.classList.add('app');
                openGalleryApp(innerWindow);
            });
        })
    .catch(error => console.log('::error::', error));
}