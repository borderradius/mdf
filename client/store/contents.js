// import { go, filter } from '../plugins/fx';

export const state = () => {
  return {
    lists: [],
    searchParam: {},
  };
};

export const mutations = {
  SET_LISTS(state, payload) {
    state.lists = payload;
  },
  SET_SEARCH_PARAM(state, payload) {
    state.searchParam = payload;
  },
  SET_IS_FAVOR(state, payload) {
    // const changedCard = go(
    //   state.lists,
    //   filter(
    //     l =>
    //       l.contentsNo === payload.contentsNo &&
    //       l.projectName === payload.projectName,
    //   ),
    // );
    // console.log(changedCard);
    // console.log(state.lists);
    for (const a of state.lists) {
      if (
        a.contentsNo === payload.contentsNo &&
        a.projectName === payload.projectName
      ) {
        a.isFavor = payload.isFavor;
      }
    }
    // console.log(state.lists);
    // console.log(
    //   go(
    //     state.lists,
    //     filter(
    //       l =>
    //         l.contentsNo === payload.contentsNo &&
    //         l.projectName === payload.projectName,
    //     ),
    //   ),
    // );
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
    // context.dispatch('search', getters.GET_SEARCH_PARAM);
    context.commit('SET_IS_FAVOR', contentInfo);
  },
  async deleteFavor(context, contentInfo) {
    await this.$axios.post('favorite/deleteContent', contentInfo);
    // context.dispatch('search', getters.GET_SEARCH_PARAM);
    context.commit('SET_IS_FAVOR', contentInfo);
  },
  async favorList({ commit }) {
    const { data } = await this.$axios.get('favorite/list');
    commit('SET_LISTS', data.result);
  },
};

export const getters = {
  GET_SEARCH_PARAM: state => state.searchParam,
};
