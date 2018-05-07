##H5 移动端开发脚手架 ##

这是一个简单且实用的 H5 移动端开发脚手架。专门为移动端而生，可生成在browser上访问多端口显示 H5 宣传页。

![h5](http://images.cnblogs.com/cnblogs_com/hao5599/1211580/o_h5.png)

> 让H5制作变得更加个性化

## 依赖列表 ##
1. [Pug](https://github.com/pugjs/pug) --> 用于实现template模版引擎
2. [Stylus](https://github.com/stylus/stylus) --> 用于编写css样式
3. [Supervisor](https://github.com/petruisfan/node-supervisor) --> 用于node热加载服务
4. other ...

## 下载 ##

### 克隆本仓库 ###
```bash
git clone https://github.com/cntanglijun/h5-mobile-scaffold.git <your-dir-name>
```

### 启动服务器 ###
via npm:
```bash
npm start
```

### 打包发布 ###
```bash
npm run build
```

## 项目结构 ##

	    /app
        /dist               --> 项目文件的分发版本，所有的文件均由Gulp任务生成，请勿手动修改
            /fonts          --> 从/src/fonts和在config/vendors.js中指定的第三方字体复制而来
            /images         --> 由/src/images下的图片经Imagemin压缩优化生成
            /javascripts    --> 由/src/javascripts下的文件经Browserify打包生成
            /stylesheets    --> 由/src/scss下的文件编译生成
            index.html      --> 由/src/index.html生成
        /src                --> 项目的源码，所有文件都可编辑
            /fonts          --> 存放字体文件
            /images         --> 存放图片文件
            /javascripts    --> JS源文件，经Browserify打包后生成/bundle.js
            index.html      --> 页面HTML
	    .gitignore
	    gulpfile.js             --> Gulp任务
	    package.json


## 开发流程 ##
待添加...

## 显示案例 ##
待添加...

## 添加优化功能 ##
1. 在browse生成一个手机效果模拟壳
2. 添加动画功能demo
3. 目前在哪些场景有体现出来作用
4. gulp任务的说明
5. 响应式的说明
6. 移动端调试部分
7. 添加了哪些功能和效果
8. 图片的预处理方式
9. ...