import * as ActionTypes from "../actions";
import * as MutationTypes from "../mutations";

const getters = {};

const actions = {};

const mutations = {};

const state = () => {
    return {
        addresses: [],
    };
};

export const phone = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
};
