![Обложка UVST](https://unniiiverse.github.io/cdn/image/projectPreview/uvst.png)

Documentation will be available on english soon.
<!-- [Documentation also available on english](https://github.com/unniiiverse/UVST/blob/main/README_en.md) -->

# Введение
## Что такое UVST
UVST - Это разработаный unniiiverse GULP сборщик проектов. В UVST есть много различных заготовок, плагинов и модулей для облегчения рутины в вёрстке. 
Текущая версия UVST: **uvst_1.2.0**

## Что может UVST
**Функционал сборки**
+ Разнообразные режимы работы сборщика. [#](#режимы-работы-сборщика)
+ Сборка различных файлов HTML в один. [#](#html-сборщик)
+ Локальный сервер. [#](#локальный-сервер)
+ Сборка scss файлов. [#](#сборка-scss-файлов)
+ Сжатие и конвертация картинок в .webp. [#](#сжатие-картинок)
+ Создание файлов шрифтов. [#](#создание-шрифтов)
+ Предотвращение кеширования браузером. [#](#предотвращение-кеширования)
+ Создание zip архива проекта. [#](#создание-zip-архива)

**Дополнительное**
+ Адаптивные изображения. [#](#адаптивные-изображения)
+ Анимации контента. [#](#анимации-контента)
+ Сетка. [#](#сетка)
+ Тултип. [#](#тултипы)
+ Слайдер. [#](#слайдер)
+ Полезные SCSS миксины. [#](#scss-миксины)
+ UVSTM модули. [#](#uvstm-модули)
<!-- + Табы. [#]()
+ Аккордеон. [#]()
+ Модальное окно. [#]() -->

## Начало работы
Для начала работы с сборщиком UVST, необходимо установить [**Node JS**](https://nodejs.org/en/download/). После необходимо инициализировать сборку слудующей коммандой в терминале проекта ```npm run init``` (если вы впервые используете gulp, сначала необходимо установить gulp-cli - ```npm i gulp-cli -g```). Внимание, если вы загружали файлы в src до инициализации, они будут перемещены в **backup/projectBackup**.

# Документация
## Режимы работы сборщика

Режим инициализации сборщика. Все ранее загруженые файлы в src/ будут перемещены в backup/projectBackup.
```
npm run init
```

Режим разработки проекта. Запуск локального сервера, ничего не сжимается.
```
npm run dev
```

Режим продакшена проекта. Ко всем локальным ссылкам добавляется тайм-штамп для предотвращения кеширования, картинки сжимаются и конвертируются в .webp формат, шрифты обновляются.
```
npm run build
```

Режим создания zip архива с проектом.
```
npm run zip
```

Режим создания стилей шрифтов в src/scss/base/fonts.scss. .otf > .ttf > .woff & .woff2. Для обновления шрифтов необходимо запустить задачу заново.
```
npm run fonts
```

## HTML Сборщик
Специальный плагин может собирать несколько HTML файлов в один.

Использование

```js
// HTML *.html
@@include('./[FOLDER]/[FILE].html', {[ATTRIBUTES]})

// Подключение других HTML страниц в одну.
@@include('./[FOLDER]/[FILE].html', {
    "[ATTRIBUTE NAME]":"[ATTRIBUTE VALUE]"
})

// Использование параметров на подключаемой странице.
@@[ATTRIBUTE NAME]
```

<br><br>

Из-за сборки HTML файлов, у вас могут возникнуть проблемы с путями на подключаемых страницах. Для того что бы избежать этого, рекомендуеться установить плагин **Path Autocomplete** и в **settings.json** (В VS Code, в других редакторах файл может отличаться) добавить следующие комманды
```js
// JSON settings.json
"path-autocomplete.pathMappings": {
    "@": "${folder}/src/", // = ./
},
```

Использование

После установки плагина и добавления комманд, при вводе **@/** у вас будет выпадать меню выбора пути (В VS Code, в других редакторах может быть всё по другому). Сборка автоматически настроит правильные пути. Изменять префикс не рекомендуеться, так как сборка расчитана именно на @! 

```html
<!-- src/*.html -->
<a href="@/page.html"></a>
<img src="@/img/image.png">

<!-- dist/*.html -->
<a href="./page.html"></a>
<img src="./img/image.png">
```

## Локальный сервер
Локальный сервер browser sync с автоматическим обновлением при сохранении проекта. Режим разработки dev запускает браузер и выводит в консоль локальную и глобальную (для этой сети) ссылки. Для завершения процесса нужно нажать ctrl c.

## Сборка scss файлов
Все подключённые в src/scss/style.scss файлы будут собраны и конвертированы в один css файл в двух вариантах: .min.css - сжатый файл и .css  - не сжатый. Автоматически добавляются вендорные префиксы для поддержки кросс-браузерности, все медиа запросы с одинаковыми значениями их активации собираются в один.

## Сжатие картинок
Все картинки в папке src/img сжимаются и конвертируются в .webp формат, так же в html файлах картинки обворачиваются в тег picture, где основная картинка в формате .webp.

## Создание шрифтов
Сборщик может конвертировать .otf в .ttf в .woff & .woff2 в режимах работы fonts и dev.

## Предотвращение кеширования
Сборщик автоматически добавляет тайм-штамп к локальным ссылкам на css & js файлы для предотвращения кеширования стилей браузером.

## Создание zip архива
Сборщик может создавать zip архив проекта в режиме работы zip.

## Адаптивные изображения
У всех тегов img по умолчанию стоят следующие стили, с помощью них картинки автоматически располагаются по центру, и занимают 100% доступной ширины:
```scss
// SCSS default styles in style.scss
img {
    max-width: 100%;
    height: auto;
    position: relative;
    object-fit: cover;
    object-position: center;
}
```

## Анимации контента
В сборщике уже установлена библиотека [animate.css](https://animate.style), что позволяет анимировать контент, так же установлена библиотека [wow.js](https://wowjs.uk/docs.html), она позволяет запускать анимации когда элемент попадёт в вьюпорт пользователя. Для включения этого модуля в src/js/app.js в секции для импорта модулей, необходимо ввести слеующую команду: 
```js
// JS src/js/app.js in modules import section
uvst.animateInit();
``` 
Для всех элементов с классом animate__[ANIMATION NAME] блок появляется когда он находится на 50% высоты выше нижней границы браузера.

Использование

```html
<!-- HTML *.html -->
<div class="animate__[ANIMATION NAME]"></div>
```

## Сетка
В UVST есть встроенная flex сетка, в которой есть ряд - ```.g-row``` и колонка - ```.g-col```, 1 колонка = 100% доступной ширины. (Т.е если в ряду 3 колонки, каждая будет по 33.3%). Эта сетка может использоватся для быстрого создания сетки карточек.

Использование

```html
<!-- HTML *.html -->
<div class="g-row">
    <div class="g-col">

    </div>
</div>
```

## Тултипы
В сборщике уже подключена и готова к работе библиотека [tippy.js](https://atomiks.github.io/tippyjs/). Если контент тултипа появляется без анимации - выберете другую. 
Создать свою анимацию для тултипа можно в src/scss/style.scss в разделе **tippy.js animations**. Пример:
```scss
// SCSS src/scss/style.scss in animations section
.tippy-box {
    &[data-animation='[ANIMATION]'][data-state='hidden'] {
        [SETTINGS]
    }
}
```
[data-animation='[ANIMATION]' - это название анимации которую вы указали в настройках.

Использование:

```js
// JS src/js/app.js in modules import section
uvst.tippyInit();
```
Функция поддерживает все настройки указанные в документации этой библиотеки.

## Слайдер.
В сборщике уже подключена и готова к работе библиотека [swipper.js](https://swiperjs.com/swiper-api).

Использование

```js
// JS src/js/app.js in modules import section
uvstFunctions.swiperInit('[SELECTOR]', {
    [OPTIONS]
})
```
Функция поддерживает все настройки указанные в документации этой библиотеки.

## SCSS Миксины
### PX в REM
scss функция, переводит абсолютные px в относительные rem. 1rem = $fontSize в style.scss.

Использование

```scss
// SCSS *.scss
.sth {
    font-size: rem(16) // 16px
}
```

## UVSTM Модули
UVSTM Модули - это модули предназнаеные для UVST (но так же могут работать отдельно), разработаные мной. Они есть на codepen и github. 

# МОДУЛИ В РАЗРАБОТКЕ

<div style="display: flex; justify-content: space-between;"><a href="#">Наверх</a> UVST & UVSTM by unniiiverse ©️ 2021 - 2022</div>