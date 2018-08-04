# sudoku-js
This is a sudoku game make by js

### 在线效果展示：Demo: https://www.donglixia.club/sudoku-js

## 项目说明

技术：gulp、webpack、less等

### 项目目录

#### www/ 项目所生成发布的文件放在此目录

#### src/ 开发过程中使用的目录

index.js :页面入口以及事件绑定

src/js/core/	算法以及数据结构相关的脚

toolkit.js :工具方法集
generator.js :生成数独解决方案
checker.js :检查数独解决方案
suduku.js :生成数独游戏

src/js/ui/	界面相关的脚本
grid.js生成九宫格
popupnumbers.js 处理弹出的操作面板

#### dist/ 项目所生成发布的文件放在此目录（使用webpack打包生成，可选） 

#### 注：除了webpack、gulp还有其他工具，此处使用两种工具是为了广泛接触多种开发工具

### 项目下载以及运行

1、下载项目: 使用git命令：git clone git@github.com:ghcdg/sudoku-js.git 或者 git clone https://github.com/ghcdg/sudoku-js.git 进行下载

2、运行项目：打开www文件夹中的index.html文件即可运行（或者dist中的index.html文件）

### 项目构建
1、构建src中所有文件，www中js、css、index.html三个文件

2、打开cmd，进入项目目录（sudoku-js）,运行命令：npm init 初始化项目（没有特殊要求，默认即可）

3、安装gulp（详情查看gulp官网如何使用以及配置gulpfile.js）以及项目中需要使用的相关插件（可查看package.json需要使用哪些插件）

4、建立webpack.config.js并做好相关配置（详情查看webpack官方文档） 

### 项目上传 

使用相应的git命令上传项目，使用 git subtree push --prefix=dist origin gh-pages 命令，将 dist 文件推送到 gh-pages 分支即可在线查看demo











