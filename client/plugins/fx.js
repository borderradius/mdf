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

const accString = (a, b) => `${a},${b}`;

const go = (...args) => reduce((a, f) => f(a), args);

const pipe = (f, ...fs) => (...as) => go(f(...as), ...fs);

const toString = iter => reduce(accString, iter);

export { filter, map, reduce, curry, go, pipe, toString };
