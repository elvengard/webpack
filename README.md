# 一个webpack+gulp 多页面demo


---

随着前端的页面越来越多，页面间的依赖也很复杂，在本项目中 webpack和gulp起到前端构建的作用，其中webpack主要用于打包js，将组件中的less预编译成css负责组件中的样式，同时压缩js代码，合并js减少页面中请求数量。

而gulp则负责编译页面中的less，转换成CSS样式文件，合并html模板，监听文件的变化等。

进入正题，要使用这套gulp+webpack模板需要安装node.js和npm。首先先全局安装webpack，gulp，webpack-dev-server三个插件，使用以下命令。(在linux下全局安装可能需要root权限)

> * npm install webpack -g
> * npm install webpack-dev-server -g
> * npm install gulp -g

接着下载源码
> * git clone https://github.com/elvengard/webpack.git
> * cd webpack
> * npm install

执行npm install 命令，这个命令会根据package.json文件自动下载安装依赖。必要的node模块。

安装完成后目录结构是这样的。（粗体为文件夹）
├── **bootstrap** &nbsp;&nbsp;(第三方模板bootstrap ui 框架)
├── gulpfile.js
├── **node_modules** &nbsp;&nbsp;(node.js模块)
├── package.json
├── README.md
├── **src** &nbsp;&nbsp;(程序源码)
└── webpack.config.js

其中程序源码的目录结构
├── **app** &nbsp;&nbsp;(HTML文件)
│   ├── bootstrap.html
│   ├── index.html
│   ├── new.html
│   └── **public**&nbsp;&nbsp;(公共HTML文件如html头部，菜单栏)
│   &nbsp;├── bootstrap_header.inc
│   &nbsp;├── bootstrap_headline.inc
│   &nbsp;├── bootstrap_nav.inc
│   &nbsp;└── bootstrap_rightbar.inc
├── **css**&nbsp;&nbsp;(旧版的样式表文件，后面将废弃掉)
│   ├── compat.less
│   └── slider.css
├── **images**
│   ├── arr-slider-left.png
│   └── user-ico.png
├── **js** 
│   ├── **lib** (js库)
│   │   └── jquery.min.js
│   ├── **public** (存放js组件,如未来的react组建)
│   │   └── public.js
│   └── **ui**
│       ├── paging.js
│       └── slider.js
└── **style** (新版样式表，主要用less编写存储页面样式)
    └── new.less
    
    
文件目录看完了，接下来就是运行整个项目了，首先输入
> * webpack

命令，webpack会根据webpack.config.js打包js代码，将js代码以AMD规范合并到一个文件中，同时将less文件自动加入到html的头部形成样式表。

接着运行
> * gulp dev

会执行gulp dev的任务，自动合并html文档，编译less，同时生成一个dist目录，主要是编译后的html文档。
> * localhost:3000 就能看到当修改html，css文件时候，它会自动编译新文件，刷新页面，就能看到变更后的结果，webpack-dev-server --hot --inline 主要负责JS的改变监听工作。
