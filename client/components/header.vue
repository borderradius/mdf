<template>
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <svg
        class="fill-current h-8 w-8 mr-2"
        width="54"
        height="54"
        viewBox="0 0 54 54"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
        />
      </svg>
      <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
    </div>
    <div class="block lg:hidden">
      <button
        class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
      >
        <svg
          class="fill-current h-3 w-3"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </button>
    </div>
    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
      <div class="text-sm lg:flex-grow">
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Docs
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
        >
          Examples
        </a>
        <a
          href="#responsive-header"
          class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
        >
          Blog
        </a>
      </div>
      <div>
        <a
          href="#"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
          >Download</a
        >
      </div>
    </div>
  </nav>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { filter, map, reduce, curry } from '../plugins/fx.js';
export default {
  data() {
    return {
      products: [
        { name: '반팔티', price: 15000 },
        { name: '긴팔티', price: 20000 },
        { name: '핸드폰케이스', price: 15000 },
        { name: '후드티', price: 30000 },
        { name: '바지', price: 25000 },
      ],
    };
  },
  created() {
    // console.log(map(p => p.price, this.products));
    const add = (a, b) => a + b;
    const products = this.products;
    // GO : 인자를 받아 즉시 값을 평가할 때 사용!!
    const go = (...args) => {
      return reduce((a, f) => f(a), args);
    };
    console.log(
      go(
        0,
        a => a + 1,
        a => a + 10,
        a => a + 100,
      ),
    );

    // PIPE : 함수들이 나열되어 있는 함성함수를 만들때 이용
    const pipe = (...fs) => a => go(a, ...fs);

    const f = pipe(
      a => a + 1,
      a => a + 10,
      a => a + 100,
    );

    console.log(f(0));
    console.clear();

    console.log(
      // eslint-disable-next-line no-shadow
      go(products, products => filter(p => p.price < 20000, products)),
      // eslint-disable-next-line no-shadow
      products => map(p => p.price, products),
      prices => reduce(add, prices),
    );

    console.clear();

    /**
     * CURRY
     * 받아둔 함수를 원하는 시점에 평가시키는 함수
     * 함수를 받아서 함수를 리턴하고 인자를 받아서 인자가 원하는 만큼 들어왔을 때 받아둔 함수를 나중에 평가시키는 함수
     */

    // const mult = curry((a, b) => a * b);

    console.log(
      go(
        products,
        filter(p => p.price < 20000),
        map(p => p.price),
        reduce(add),
      ),
    );

    // console.log(
    // reduce(
    //   add,
    //   filter(
    //     n => n < 20000,
    //     map(p => p.price, this.products),
    //   ),
    // ),
    // );
  },
};
</script>

<style scoped></style>
