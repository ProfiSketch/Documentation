module.exports = {
  base: "/Documentation/",
  // base: process.env.NODE_ENV === "production" ? "/cost-calc-docs/" : "/",
  dest: "docs/dist",
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      lang: "ru-RU", // this will be set as the lang attribute on <html>
      title: "ProfiSketch: Документация",
      description: "Описание, гайды, частые вопросы"
    }
  },
  themeConfig: {
    locales: {
      "/": {
        nav: [
          {
            text: "ProfiSketch.com",
            link: "https://profisketch.com"
          }
        ],
        sidebar: {
          "/": [
            {
              title: "Содержание",
              children: [
                "/ps/",
                "/ps/comments",                   // 0.   Пояснения

                "/ps/profile/",                   // 1.   Личный кабинет пользователя

                children: [
                    "/ps/profile/registration",       // 1.1. Регистрация
                    "/ps/profile/create_project",     // 1.2. Создание проекта
                ]

                "/ps/editor2d/",                  // 2.   Создание 2D-схемы
                "/ps/editor2d/shapes_placing",    // 2.1. Размещение фигур
                "/ps/editor2d/libraries",         // 2.2. Библиотеки условно-графических обозначений
                "/ps/editor2d/searching",         // 2.3. Поиск фигур
                "/ps/editor2d/properties",        // 2.4. Свойства элементов
                "/ps/editor2d/connections",       // 2.5. Соединение фигур
                "/ps/editor2d/drafting",          // 2.6. Приёмы работы при оформлении чертежа
                "/ps/db/",                        // 3.   База данных
                "/ps/db/search",                  // 3.1. Поиск оборудования
                "/ps/db/properties",              // 3.2. Перенос атрибутивной информации
                "/ps/db/edit",                    // 3.3. Редактирование свойств
                "/ps/db/create",                  // 3.4. Создание собственных элементов
                "/ps/specification/",             // 4.   Спецификация
                "/ps/specification/settings",     // 4.1. Настройка таблицы
                "/ps/specification/export",       // 4.2. Экспорт таблицы
                "/ps/timelapse",                  // 5.   Таймлапс создания схемы
                "/ps/support",                    // 6.   Техническая поддержка
                "/ps/plugins",                    // 7.   Плагины
                "/ps/convertation",               // 8.   Перевод 2D-схем в 3D-модель

                //"/calc/math",                       // Оставлено для примера, удалить
                //"/calc/interface",                  // Оставлено для примера, удалить
                //"/calc/settings",                   // Оставлено для примера, удалить
                //"/calc/dev"                         // Оставлено для примера, удалить
              ],
              collapsable: false
            }
          ]
        }
      }
    }
  },
  plugins: [
    [
      "vuepress-plugin-zooming",
      {
        // selector for images that you want to be zoomable
        // default: '.content img'
        selector: ".zoom-img",

        // make imgaes zoomable with delay after entering a page
        // default: 500
        delay: 1000,

        // options of zooming
        // default: {}
        options: {
          bgColor: "rgba(0,0,0,0.4)",
          zIndex: 10000
        }
      }
    ],
    /*
    [
      "mathjax",
      {
        target: "chtml",
        macros: {
          "~=": "\\approx",
          "=/=": "\\ne",
          "+-": "\\pm",
          "=>": "\\implies",
          "<=": "\\impliedby",
          "<=>": "\\iff",
          "->": "\\to",
          "<-": "\\gets",
          "<->": "\\leftrightarrow",
          "...": "\\dots",
          "***": "\\cdots",
          "*": "\\cdot",
          "-:": "\\div",
          "\\deg": "^\\circ",
          "(": "\\left(",
          ")": "\\right)",
          "\\Z": "\\mathbb{Z}",
          "\\R": "\\mathbb{R}",
          "\\Q": "\\mathbb{Q}",
          "\\N": "\\mathbb{N}"
        }
        // presets: [
        //     '\\def\\lr#1#2#3{\\left#1#2\\right#3}',
        //     '\\def{#1}/{#2}{\\dfrac{#1}{#2}}',
        // ]
      }
    ],
    */
    // Below 2 plugins can conflict with each other, nedd to test
    "vuepress-plugin-smooth-scroll",
    "@vuepress/active-header-links",
    // Back to top button
    "@vuepress/back-to-top",
    // Progress bar?
    "@vuepress/nprogress",
    // Search
    [
      "@vuepress/search",
      {
        searchMaxSuggestions: 10
      }
    ],
    // Progressive Web App
    [
      "@vuepress/pwa",
      {
        serviceWorker: true,
        updatePopup: {
          "/": {
            message: "Доступно обновление документации.",
            buttonText: "Загрузить"
          }
        }
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    extendMarkdown: md => {
      md.set({ typographer: true });
      md.use(require("@iktakahiro/markdown-it-katex"));
    }
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css"
      }
    ]
  ]
};
