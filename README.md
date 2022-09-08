![UVST Thumbnail](https://unniv.info/uvst/thumbnail.png)
# Что такое UVST?
UVST - Это бесплатный GULP сборщик проектов, разработанный unniiiverse. UVST обладает большим набором заготовок и плагинов, для самых разнообразных задач. Текущая версия UVST: uvst 1.1.3. 

# Что может UVST 1.1.3
+ HTML Модули. [#](#html-модули)

# Начало работы
В сборке установлены разнообразные плагины, без которых работа сборщика не возможна, для их установки, в терминале проекта необходимо ввести комманду ```npm i```.
Для работы с путями картинок, рекомендуется использовать плагин **Path Autocomplete**, так же в **settings.json** добавить следующий текст:
```js
"path-autocomplete.pathMappings": {
    "@img": "${folder}/src/img", // img
    "@scss": "${folder}/src/scss", // scss
    "@js": "${folder}/src/js", // js
},
```

# Документация
### HTML Модули
Ты можешь "склеивать" разные html страницы в одну блягодаря плагину **gulp-file-include** [npm](https://www.npmjs.com/package/gulp-file-include)
```js
@@include('[FOLDER]/[FILE].html', {[ATTRIBUTES]})

@@include('[FOLDER]/[FILE].html', {
    "[ATTRIBUTE NAME]":"[ATTRIBUTE VALUE]"
})

// Использование параметров на подключаемой странице

@@[ATTRIBUTE NAME]
```