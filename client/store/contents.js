export const state = () => {
  return {
    lists: [],
  };
};

export const mutations = {
  SET_LIST(state, payload) {
    state.lists = Object.freeze(payload);
  },
};

export const actions = {};
