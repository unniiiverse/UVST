![Обложка UVST](https://unniv.info/uvst/thumbnail.png)

Documentation will be available on english soon.
<!-- [Documentation also available on english](https://github.com/unniiiverse/UVST/blob/main/README_en.md) -->

# Что может UVST
**Функционал сборки**
+ HTML Модули. [#](#html-модули)
+ UVSTM Модули. [#](#uvstm-модули)
+ Локальный сервер с авто-обновлением результата.
+ Сборка scss файлов в css, минификация и добавление префиксов.
+ Добавление .webp картинок, если их поддерживает браузер. 
+ Создание .woff и .woff2 шрифтов, добавление их в src/scss/base/fonts.scss. [#](#обработка-шрифтов)
+ Запуск проекта или очистка для новых проектов [#](#режимы-работы-uvst).
+ Предотвращение кеширования стилей и скриптов браузера.
+ Создание .zip архива проекта.

**Модули**
+ Адаптивные изображения. [#](#адаптивные-изображения)
+ Колоночная сетка. [#](#колоночная-сетка)
+ Анимации контента. [#](#анимации-контента)
+ Тултипы. [#](#тултипы)
+ Слайдер. [#](#слайдер)
+ Табы. [#](#uvstm-tabs)
+ Аккордеон. [#](#uvstm-accordion)
+ Модальное окно. [#](#uvstm-modal)


# Начало работы
Для начала работы с UVST, необходимо установить **Node JS** [#](https://nodejs.org/en/download/), так же в терминал проекта необходимо ввести комманду ```npm run setup```. **Если вы уже загрузили файлы в src до инициализации UVST, все файлы будут удалены из src, и перемещены в backup/projectBackup!**

Для удобного подключения путей в .html рекомендуется использовать плагин **Path Autocomplete**, т.к подключение стандартным образом, может работать не корректно. Так же в **settings.json** необходимо добавить следующий код:
```js
// JSON settings.json
"path-autocomplete.pathMappings": {
    "@": "${folder}/src/", // = ./
},
```
Префикс изменять не рекомендуется, так как сборка UVST изменяет только **@** на корректный путь. **@** в href или в src = ```.```. Пример использования:
```html
<!-- src/*.html -->
<a href="@/page.html"></a>
<img src="@/img/image.png">

<!-- dist/*.html -->
<a href="./page.html"></a>
<img src="./img/image.png">
```

# Документация
## Режимы работы UVST
UVST поддерживает несколько режимов работы сборщика, для оптимизации тех или иных задач. Для запуска сборщика с определённым режимом, в терминале проекта необходимо указать ```npm run [MODE]```. Ниже описаны все режимы работы UVST.

Первый запуск (очистка) проекта, обновление node модулей, установка стандартных файлов src, создание бэкапа src/, очистка dist/ и src/ папок.
```
npm run setup 
```

Режим разработки проекта, в нём ничего не сжимается, картинки не конвертируются в .webp, облегченный вариант.
```
npm run dev 
```

Режим сборки проекта, в нём все стили, скрипты и картинки так же сжимаются, картинки конвертируются в .webp.
```
npm run build 
```

Режим создания файла стилей шрифта, конфертация шрифта из .otf > .ttf > .woff > .woff2.
```
npm run fonts 
```

Режим создания .zip архива проекта.
```
npm run zip 
```

## Обработка шрифтов
```npm run build``` и ```npm run fonts``` обрабатывают .otf шрифты в .ttf, .ttf в .woff и .woff2.
Не поддерживает файлы .eot.
Сценарий очистки dist/ не очищает папку шрифтов, по этому рекомендуется перед использование build сценария, удалить её мануально.

## HTML Модули
Вы можете "склеивать" разные html страницы в одну.<br>
Использование:
```js
// HTML *.html
@@include('[FOLDER]/[FILE].html', {[ATTRIBUTES]})

@@include('[FOLDER]/[FILE].html', {
    "[ATTRIBUTE NAME]":"[ATTRIBUTE VALUE]"
})

// Использование параметров на подключаемой странице

@@[ATTRIBUTE NAME]
```

## JS Функции
```js
// JS app.js
uvstFunctions.getBrowserLanguage() // Возвращает строку с языком браузера. (en-US)
uvstFunctions.getSystemTheme() // Возвращает строку с темой системы. (dark / light)
```

## Адаптивные изображения
По стандарту ко всем изображениям добавляется стили: 
```scss
img {
    max-width: 100%;
    height: auto;
    position: relative;
    object-fit: cover;
    object-position: center;
}
```

## Анимации контента
Анимации появления контента реализованы с помощью библиотеки animate.css ([docs](https://animate.style)), так же с помощью библиотеки WOW.js ([docs](https://wowjs.uk/docs.html)), анимации будут активироватся когда юзер долистает до них. Что бы использовать анимацию, необходимо только скопировать её класс из animate.style и вставить его в класс тега. Пример:
```html
<!-- HTML *.html -->
<div class="animate__fadeInUp"></div>
```
Использование:
```js
// JS app.js
uvstFunctions.animate();
```

## Тултипы.
Тултипы реализованые через библиотеку tippy.js ([docs](https://atomiks.github.io/tippyjs/)). Если контент тултипа появляется без анимации, выберете другую. 
Создать свою анимацию для тултипа можно в scss/style.scss в разделе **tippy.js анимации**. Пример:
```scss
// SCSS style.scss
.tippy-box {
    &[data-animation='[ANIMATION]'][data-state='hidden'] {
        [SETTINGS]
    }
}
```
[data-animation='[ANIMATION]' это название анимации, которую вы указали в настройках.

Использование: 
```js
// JS app.js
uvstFunctions.tippyInit('[SELECTOR]', {
    [OPTIONS]
})
```
Функция поддерживает все настройки указанные в документации tippy.js.

## Слайдер.
Слайдер реализованный через библиотеку swiper ([docs](https://swiperjs.com/swiper-api)). Использование:
```js
// JS app.js
uvstFunctions.swiperInit('[SELECTOR]', {
    [OPTIONS]
})
```
Функция поддерживает все настройки указанные в документации swiper.

## Колоночная сетка.
Простая сетка для адаптвиных карточек. Каждая ```g-col``` в ```g-row``` занимает 100% доступной ширины (т.е если в g-row будет 3 колонки, ширина каждой колонки будет 33.333%, у 2х по 50%). Стандартная минимальная ширина колонки - 300px. Использование:
```html
<!-- HTML *.html -->
<div class="g-row">
    <div class="g-col">[CONTENT]</div>
</div>
```

## UVSTM Модули

## UVSTM-Tabs
[Табы на Codepen](https://codepen.io/unniiiverse/pen/MWGpKaw)

**HTML Разметка**
```html
<div class="uvstm-tabs">
    <ul class="uvstm-tabs-control" role="tablist">
        <li class="uvstm-tabs-control_item" role="tab" tabindex="0">
            <p>[Tab]</p>
        </li>
    </ul>

    <ul class="uvstm-tabs-content">
        <li class="uvstm-tabs-content_item" role="tabpanel" tabindex="0">
            <p>[Content]</p>
        </li>
    </ul>
</div>
```
<br>

**SCSS Конфигурация**
```scss
.uvstm-tabs-control_item--active // Активный класс кнопки таба
.uvstm-tabs-content_item--active // Активный класс контента таба
```

**JS Конфигурация**
```js
// JS app.js
uvstFunctions.tabsInit();
```

## UVSTM-Accordion

ARIA-Доступный модуль аккордеона. <br>
[Аккордеон на Codepen](https://codepen.io/unniiiverse/pen/abGpVoo)

**HTML Разметка**
```html
<ul class="uvstm-accordion">
    <li class="uvstm-accordion-item">
        <button class="uvstm-accordion-item_trigger" aria-expanded="false">
            <p class="uvstm-accordion-item_title">[Title]</p>
            <svg class="uvstm-accordion-item_arrow" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1_185)">
                    <path d="M5.24042 6L12.5 13.4201L19.7596 6L22 8.28995L12.5 18L3 8.28995L5.24042 6Z" fill="white" />
                </g>
                <defs>
                    <clipPath id="clip0_1_185">
                        <rect width="24" height="24" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </button>

        <div class="uvstm-accordion-item_content" aria-hidden="true">
            [Content]
        </div>
    </li>
</ul>
```
<br>

**SCSS Конфигурация**
```scss
.uvstm-accordion-item--open // Активный класс аккордеона 
```

**JS Конфигурация**
```js
// JS app.js
uvstFunctions.accordionInit();
```

## UVSTM-Modal
ARIA-доступный модуль модальных окон (попапов), с поддержкой указания своих ID-шников (например, для открытия одного модального окна двумя кнопками)

**HTML Разметка**
```html
<!-- Триггер -->
<button class="uvstm-modal-trigger_button">
    trigger #1
</button>

<!-- Окно -->
<div class="uvstm-modal-container" data-uvstm-modal-container_close>
    <!-- Модальное окно -->
    <div class="uvstm-modal-container_modal" aria-hidden="true">
        <!-- Кнопка для закрытия модального окна -->
        <button class="uvstm-modal-container_close" data-uvstm-modal-container_close>
            [X]
        </button>
    </div>
</div>

<!-- Аттрибуты -->
<!-- Аттрибут для элемента который закрывает модальное окно. -->
<button data-uvstm-modal-container_close></button>

<!-- 
    Аттрибут в триггере (.uvstm-modal-trigger_button) для указания своих ID-шников.
    (Например для открытия одного модального окна разными кнопками)
-->
<button data-uvstm-modal-customID="[TRIGGER ID] [MODAL ID]"></button>

<!--
    Аттрибут в триггере (.uvstm-modal-trigger_button) для определения положения модального окна. 
    Допустимые значения: top - сверху, center - по центру, custom - позиционирование указывается разработчиком.
-->
<button data-uvstm-modal-modalItem-position="[POSITION]"></button>
```
<br>

**SCSS Конфигурация**
```scss
.uvstm-modal-container--open // Класс фона открытого модального окна.
.uvstm-modal-container_modal--open // Класс открытого модального окна
```

**JS Конфигурация**
```js
// JS app.js
uvstFunctions.modalInit();
```

[На верх](#что-может-uvst) <br>
unniiiverse ©️ 2022