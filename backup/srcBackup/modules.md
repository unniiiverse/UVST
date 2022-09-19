## UVSTM-Accordion 1.0.0

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
// Отсутствует
```

**JS Конфигурация**
```js
uvstm_accordion();
```

## UVSTM-Tabs 1.0.0
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
uvstm_tabs(initialActiveTab); // initialActiveTab = 0 (1 elem) // default
```