export default ({ store }) => {
  const isLoggedIn = store.state.auth.loggedIn;
  console.log('=== isLoggedIn ===', isLoggedIn);

  // const notAllowPaths = [''];
  // const isAllowPath = route.matched.some(m =>
  //   notAllowPaths.some(n => m.path.includes(n)),
  // );
  // if (!isLoggedIn) {
  // alert('required login');
  // redirect('/signin');
  // }
};
