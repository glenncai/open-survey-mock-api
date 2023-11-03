const Koa = require('koa');
const Router = require('koa-router');
const mockList = require('./mock/index');
const { loadResponseData } = require('./util/index');

const app = new Koa();
const router = new Router();

// Register routes
mockList.forEach((item) => {
  const { method, url, response } = item;
  router[method](url, async (ctx) => {
    ctx.body = await loadResponseData(response, ctx);
  });
});

app.use(router.routes()).use(router.allowedMethods());
app.listen(3000, () => {
  console.log('Mock server is running at http://localhost:3000');
});
