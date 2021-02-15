# [News Explorer](https://v1ktorbro.github.io/news-explorer-frontend/index.html)

# По объяснимым причинам (не куплена платная подписка на NewsApi.org и не оплачен хостинг на котором расположен бэкэнд), вся функциональность проекта работает только локально.

## Используемый стэк:

**React.js, CSS3(flex, grid layout), API fetch, БЭМ nested**

## Бэкэнд
Запросы отправляются с помощью fetch метода на [бекенд](https://github.com/v1ktorbro/news-explorer-api), который размещен на домене https://v1ktorbro.students.nomoreparties.xyz 

## О проеке

Проект [News Explorer](https://v1ktorbro.github.io/news-explorer-frontend/index.html) - сервис по поиску новостей. При запросе поиска новостей на соответствующую тему происходит API запрос на сторонний бэкенд [NewsApi.org](https://newsapi.org/).
Когда пользователь сохраняет карточку, то запрос происходит на [собственный бекенд](https://github.com/v1ktorbro/news-explorer-api).

Авторизация пользователя происходит при помощи [JWT](https://www.npmjs.com/package/jsonwebtoken), который сохраняется в localStorage браузера и при последующих запросах, которые требуют авторизации (сохранение карточек, а также их удаление), отправляются вместе с fetch методом в виде заголовка.

### Структура проекта

        components/ | компоненты страницы. внутри каждого компонента располагаются его стили;
        contexts/   | контекст с информацией о текущем пользователе;
        fonts/      | шрифт Inter;
        images/     | svg изображения размещенные на странице;
        utils/      | Api файлы;


### Авторы

* **Яндекс.Практикум** *гуру и наставник* - [Yandex.Practikum](https://praktikum.yandex.ru);

* **Виктор Абросимов** *писарь* - [linkedin](https://www.linkedin.com/in/victor-abrosimov-631b6b1a4/).
