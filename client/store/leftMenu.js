export const state = () => {
  return {
    projectList: [],
  };
};

export const mutations = {
  SET_LEFT_MENU(state, payload) {
    state.projectList = payload;
  },
};

export const actions = {
  async getProjectList({ commit }) {
    const { result } = await this.$axios.$get('/menu/project');
    commit('SET_LEFT_MENU', result.projectList);
  },
};
