const Koa = require("koa");
const app = new Koa();
app.use(require("koa-static")("dist", {}));

app.listen(process.env.PORT? process.env.PORT: 7777)
