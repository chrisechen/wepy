全局安装或更新WePY命令行工具
npm install wepy-cli -g

在开发目录中生成Demo开发项目
wepy init standard myproject

切换至项目目录
cd myproject

安装依赖
npm  install

开启实时编译
wepy build --watch

开发使用说明

使用微信开发者工具新建项目，本地开发选择dist目录。
微信开发者工具 --> 项目 --> 关闭ES6转ES5。
本地项目根目录运行wepy build --watch，开启实时编译。
