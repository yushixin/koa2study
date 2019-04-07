const Koa = require('koa')//加载koa模块
const app = new Koa();//实例化对象

app.use(async ctx => {//async 一个异步操作
    ctx.body = 'Hello World';
});

app.listen(3000,() => {
    console.log('3000端口服务开启成功');
});