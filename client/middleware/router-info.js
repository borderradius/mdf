// export default ({ store, route, redirect }) => {
//   const isLoggedIn = store.state.auth.loggedIn;
//   const notAllowPaths = ['contents', 'lectures', 'cart', 'wallet'];
//   const isAllowPath = route.matched.some(m =>
//     notAllowPaths.some(n => m.path.includes(n)),
//   );
//   if (isAllowPath && !isLoggedIn) {
//     redirect('/signin');
//   }
// };
