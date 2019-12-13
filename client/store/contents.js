export const state = () => {
  return {
    lists: [],
  };
};

export const mutations = {
  SET_LISTS(state, payload) {
    state.lists = Object.freeze(payload);
  },
};

export const actions = {
  // async nuxtServerInit({ commit }) {
  //   const data = await this.$axios.get('contents/list');
  //   console.log(data);
  //   commit('SET_LISTS', data.result);
  // },
  async lists({ commit }) {
    const { data } = await this.$axios.get('contacts');
    commit('SET_LISTS', data.contacts);
  },
  async addContact({ dispatch }, userInfo) {
    try {
      await this.$axios.post('contacts', userInfo);
      await dispatch('lists');
    } catch (e) {
      return e;
    }
  },
  async delContact({ dispatch }, userInfoNo) {
    try {
      await this.$axios.delete(`contacts/${userInfoNo}`);
      await dispatch('lists');
    } catch (e) {
      return e;
    }
  },
};
