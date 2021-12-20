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
              title: "Калькулятор",
              children: [
                "/calc/",
                "/calc/math",
                "/calc/interface",
                "/calc/settings",
                "/calc/dev"
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
