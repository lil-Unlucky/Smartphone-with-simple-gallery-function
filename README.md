# Smartphone-with-simple-gallery-function
Web Smartphone with Gallery App + Add your own apps function

Что нужно чтобы довабить свое приложение и функционал для него?
Буду объяснять на примере уже рабочего внутри приложения Gallery App
1. В папке assets/app сделать странцу с контентом своего приложения. -> gallery.html

2. Добавить новый элемент со своим приложением в os.html
```
// OS.HTML
    <div class="appname app"> // В appname вставить имя своего приложения, тег app обязателен по умолчанию!
      <div class="app-icon"><img src="assets/img/app icons/gallery-app-ico.png"></div> // Вставьте картинку своего приложения в app-icon -> img:src
      <div class="app-name"><p>Gallery</p></div> // Введите название своего приложения в тег <p>Some Name</p>
    </div>
```
  
3. В папке assets/js добавить свое приложение в скрипт /apps.js
Например вы сделали:
```
// OS.HTML
  <div class="calc app"> // В appname вставить имя своего приложения, тег app обязателен по умолчанию!
    <div class="app-icon"><img src="assets/img/app icons/calc.png"></div> // Вставьте картинку своего приложения в app-icon -> img:src
    <div class="app-name"><p>Calculator</p></div> // Введите название своего приложения в тег <p>Some Name</p>
  </div>
```
Дальше вы добавляете:
```
// APPS.JS
const calcApp = document.querySelector('.Название вашего приложения'); // calc
```
Далее создаете конструкцию прослушивателя событий
```
// APPS.JS
calcApp.addEventListener('click', () => {
    innerWindow.classList.add('app'); // Данная строчка должна остаться по умолчанию!
    innerWindow.dataset.currentapp = 'calculator'; // Вводите название приложения, например: если это браузер -> browser, если галерея -> gallery, в нашем случае calculator
});
```

4. Далее верстаем наше приложение в созданном файле в папке app, стилизовать его можно в оригинальном файле index.scss или же сделать собственный в той же папке стилей! // Пункт 1
5. После того как сверстали приложение нужно сделать функцию его открытия, для этого открываем файл assets/js/index.js

6. Создаем функцию в которой и будет описан весь функционал нашего приложения. Пример функции ниже
```
// INDEX.JS
async function funcName(innerWindow) { // Вместо funcName вводим название нашей функции, параметр (innerWindow) обязателен!
    await fetch('file') // Вместо file вводим путь до файл с нашим приложением, в нашем случае 'assets/app/calc.html | Пункт 1
   .then(response => response.text())
   .then(html => {
        innerWindow.innerHTML = html; // Данная строчка обязательна!

        // Пишем функционал нашего приложения
        // Чтобы сделать функцию закрывания приложения, нужно добавить в него кнопку при нажатии на которую будет вызываться функция openOs(innerWindow)
        // Пример
        const closeApp = document.querySelector('.close-app-btn');
        closeApp.addEventListener('click', () => openOs(innerWindow));
    })
   .catch(error => console.log('::error::', error));
}
```
