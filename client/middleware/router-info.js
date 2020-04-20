export default ({ store, route, redirect }) => {
  const isLoggedIn = store.state.auth.loggedIn;

  if (!isLoggedIn && route.path === '/') {
    alert('required login');
    redirect('/signin');
  }
};
