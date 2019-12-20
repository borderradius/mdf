export const state = () => {
  return {
    list: [],
  };
};

export const mutations = {
  SET_LIST(state, payload) {
    state.list = Object.freeze(payload);
  },
};
