// eslint-disable-next-line no-shadow
const curry = f => (a, ..._) => (_.length ? f(a, ..._) : (..._) => f(a, ..._));

const filter = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
});

const map = curry((f, iter) => {
  const res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    // eslint-disable-next-line no-param-reassign
    iter = acc[Symbol.iterator]();
    // eslint-disable-next-line no-param-reassign
    acc = iter.next().value;
  }
  for (const a of iter) {
    // eslint-disable-next-line no-param-reassign
    acc = f(acc, a);
  }
  return acc;
});

export { filter, map, reduce, curry };
