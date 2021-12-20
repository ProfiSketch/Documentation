# Разработчикам

## Технологический стек

Клиентская часть выполнена на [Vue (v2.6)](https://vuejs.org/) с использованием [Typescript (v3.2)](https://www.typescriptlang.org/). При разработке использован [Vuex (v3.1)](https://vuex.vuejs.org/) и [Vue-Router (v3.1)](https://router.vuejs.org/) для возможности дальнейшего масштабирования проекта.

В качестве библиотеки готовых компонентов использован [Vuetify (v1.5)](https://vuetifyjs.com/).

## Соглашения

Клиент получает от сервера список продукции в виде массива объектов в JSON. Каждый товар должен содержать следующую информацию

```json
{
  "category": "Наименованиекатегории",
  "cost_transport": 18900,
  "demand_abs": 1516,
  "demand_historical": 0.0012,
  "id": 123,
  "image": "https://server.ru/foo/bar.jpg",
  "name": "Наименование товара",
  "price_prod": 18900,
  "price_retail": 18900
}
```
