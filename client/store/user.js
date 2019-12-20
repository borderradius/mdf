export const actions = {
  async signup(user) {
    const data = await this.$axios.post('/user/regist', user);
    return data.success;
  },
  // eslint-disable-next-line no-unused-vars
  login({ state }, user) {
    return this.$auth.loginWith('local', {
      data: user,
    });
  },
  fetchUser() {
    return this.$auth.fetchUser();
  },
  logout() {
    return this.$auth.logout();
  },
};
