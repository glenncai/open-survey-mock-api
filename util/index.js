/**
 * Simulate the loading state of a network request
 *
 * @param fn
 * @param ctx
 * @param time
 * @returns {Promise<void>}
 */
async function loadResponseData(fn, ctx, time = 500) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = fn(ctx);
      resolve(res);
    }, time);
  });
}

module.exports = {
  loadResponseData
};
