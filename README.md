![UVST Thumbnail](https://unniv.info/uvst/thumbnail.png)
# Что такое UVST?
UVST - Это бесплатный GULP сборщик проектов, разработанный unniiiverse. UVST обладает большим набором заготовок и плагинов, для самых разнообразных задач. Текущая версия UVST: uvst 1.1.3. 

# Что может UVST 1.1.3
**Функционал сборки**
+ HTML Модули. [#](#html-модули)
+ UVSTM Модули. [#](#uvstm-модули)
+ Локальный сервер с авто-обновлением результата.
+ Сборка scss файлов в css, минификация и добавление префиксов.
+ Добавление .webp картинок, если их поддерживает браузер. 
+ Создание .woff и .woff2 шрифтов из .otf и .ttf.
+ Быстрое обновление всех модулей, очистка папок dist/ и src/.
+ Предотвращение кеширования стилей и скриптов браузера.
+ Создание .zip архива проекта.

**Модули**
+ Анимации контента. [#](#анимации-контента)
+ Тултипы. [#](#тултипы)


# Начало работы
Для начала работы с UVST, необходимо установить **Node JS** [#](https://nodejs.org/en/download/), так же в терминал проекта необходимо ввести комманду: ```npm run startup```.

Для работы с путями картинок, рекомендуется использовать плагин **Path Autocomplete**, так же в **settings.json** добавить следующий текст:
```json
"path-autocomplete.pathMappings": {
    "@img": "${folder}/src/img", // img
    "@scss": "${folder}/src/scss", // scss
    "@js": "${folder}/src/js" // js
}
```

# Документация
## Режимы работы UVST
UVST поддерживает несколько режимов работы сборщика, для оптимизации тех или иных задач. Для запуска сборщика с определённым режимом, в терминале проекта необходимо указать ```npm run [MODE]```. Ниже описаны все режимы работы UVST.

Первый запуск проекта, установка node модулей или очистка dist/ и src/ папок.
```
npm run startup 
```

Режим разработки проекта, в нём ничего не сжимается, картинки не конвертируются в .webp, облегченный вариант.
```
npm run dev 
```

Режим сборки проекта, в нём все стили, скрипты и картинки сжимаются, картинки конвертируются в .webp.
```
npm run build 
```

Режим создания файла стилей шрифта, конфертация шрифта из .otf > .ttf > .woff > .woff2. В файл стилей попадают только шрифт формата .woff и .woff2.
```
npm run fonts 
```

Режим создания .zip архива проекта.
```
npm run zip 
```

Режим создания svg-спрайтов.
```
npm run svg 
```

## HTML Модули
Вы можете "склеивать" разные html страницы в одну блягодаря плагину **gulp-file-include** [npm](https://www.npmjs.com/package/gulp-file-include) <br>
Использование:
```js
@@include('[FOLDER]/[FILE].html', {[ATTRIBUTES]})

@@include('[FOLDER]/[FILE].html', {
    "[ATTRIBUTE NAME]":"[ATTRIBUTE VALUE]"
})

// Использование параметров на подключаемой странице

@@[ATTRIBUTE NAME]
```

## JS Функции
```js
uvstFunctions.getBrowserLanguage() // Возвращает строку с языком браузера.
uvstFunctions.getSystemTheme() // Возвращает строку с темой системы.
uvstFunctions.animate(); // Анимации появления контента.
```

## Анимации контента
Анимации появления контента реализованы с помощью библиотеки animate.css ([animate.style](https://animate.style)), так же с помощью библиотеки WOW.js ([wowjs.uk](https://wowjs.uk/docs.html)), анимации будут активироватся когда юзер долистает до них. Что бы использовать анимацию, необходимо скопировать её класс из animate.style и вставить его в класс тега. Пример:
```html
<div class="animate__fadeInUp"></div>
```
Использование:
```js
uvstFunctions.animate();
```

## Тултипы.
Тултипы реализованые через библиотеку tippy.js ([atomiks.github.io](https://atomiks.github.io/tippyjs/)). Если контент тултипа появляется без анимации, выберете другую. 
Создать свою анимацию для тултипа можно в scss/style.scss в разделе **tippy.js анимации**. Пример:
```scss
.tippy-box {
    &[data-animation='[ANIMATION]'][data-state='hidden'] {
        [SETTINGS]
    }
}
```
[data-animation='[ANIMATION]' это название анимации, которую вы указали в настройках.

Использование: 
```js
uvstFunctions.tippyjs('[SELECTOR]', {
    content: '',           // default
    animation: 'fade',     // default
    placement: 'top',      // default
    trigger: 'click',      // default
    arrow: false,          // default
    interactive: false,    // default
    allowHTML: false,      // default
    delay: 0               // ms. default
})
```
Функция поддерживает все вышеонаписанные настройки, подробнее смотрете в документации tippy.js.

Пример:
```js
uvstFunctions.tippyjs('#btn', {
    content: 'content',
    animation: 'fade'
})
```

## UVSTM Модули
// В РАЗРАБОТКЕ