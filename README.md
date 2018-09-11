# WebpackLoader
根据流程开发一个简单的webpack的loader
###初始化文件
* npm init
  > npm初始化webpack项目
* npm i webpack webpack-cli webpack-dev-server
  > 安装webpack项目需要的基础包
* npm i cross-env
  > 修改package.json文件,在script脚本出添加build和dev的运行命令并配置.bebelrc文件
* npm i html-loader html-webpack-plugin
  > 新建webpack.config.js文件
* 新建html-minify-loader.js文件
  > 在src下面新建本地loader开发目录,将自主开发的loader写在loaders目录下面,在webpack.config.js里面加上本地loader的位置目录
* npm i minimize loader-utils
  > 安装新建loader需要的两个模块,两个模块主要做压缩html文件的功能
* npm run build
  > 生成dist文件，因为在webpack的配置文件里面的module里面我们规定先让html-minify-loader处理html将压缩后的资源source传递给html-loader(可以打印下处理后的资源来验证自建loader的作用)
* npm run dev
    > 在浏览器查看最终被html-loader处理完之后的文件内容

