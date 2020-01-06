export const state = () => {
  return {
    lists: [],
    searchParam: {},
  };
};

export const mutations = {
  SET_LISTS(state, payload) {
    state.lists = Object.freeze(payload);
  },
  SET_SEARCH_PARAM(state, payload) {
    state.searchParam = payload;
  },
};

export const actions = {
  // async nuxtServerInit({ commit }) {
  //   const data = await this.$axios.get('contents/list');
  //   console.log(data);
  //   commit('SET_LISTS', data.result);
  // },
  async lists({ commit }) {
    const { data } = await this.$axios.get('contents/list');
    commit('SET_LISTS', data.result);
  },
  async search({ commit }, searchParam) {
    const { data } = await this.$axios.get('contents/search', {
      params: searchParam,
    });
    commit('SET_SEARCH_PARAM', searchParam);
    commit('SET_LISTS', data.result);
  },
  async addFavor(context, contentInfo) {
    await this.$axios.post('favorite/addContent', contentInfo);
    // dispatch('search', getters.GET_SEARCH_PARAM);
  },
  async deleteFavor(context, contentInfo) {
    await this.$axios.post('favorite/deleteContent', contentInfo);
    // dispatch('search', getters.GET_SEARCH_PARAM);
  },
  async favorList({ commit }) {
    const { data } = await this.$axios.get('favorite/list');
    commit('SET_LISTS', data.result);
  },
};

export const getters = {
  GET_SEARCH_PARAM: state => state.searchParam,
};
