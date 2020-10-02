import Vue from "vue";
import AppSettings from "../../wrappers/app-settings";
import * as ActionTypes from "../actions";
import * as MutationTypes from "../mutations";
import { ServiceRef } from "./utilities";

export class NetworkState {
    online: boolean = false;
    authenticated: boolean = false;
    station: boolean = false;
}

type ActionParameters = { commit: any };

const getters = {};

const actions = (services: ServiceRef) => {
    return {
        [ActionTypes.INITIALIZE]: ({ commit }: ActionParameters) => {
            const appSettings = new AppSettings();
            const token = appSettings.getString("accessToken");
            if (token) {
                commit(MutationTypes.LOGIN, token);
            }
        },
        [ActionTypes.AUTHENTICATED]: ({ commit }: ActionParameters) => {
            commit(MutationTypes.LOGIN);
        },
    };
};

const mutations = {
    [MutationTypes.RESET]: (state: NetworkState, error: string) => {
        Object.assign(state, new NetworkState());
    },
    [MutationTypes.LOGIN]: (state: NetworkState) => {
        Vue.set(state, "authenticated", true);
    },
    [MutationTypes.LOGOUT]: (state: NetworkState) => {
        Vue.set(state, "authenticated", false);
    },
};

export const network = (services: ServiceRef) => {
    const state = () => new NetworkState();

    return {
        namespaced: false,
        state,
        getters,
        actions: actions(services),
        mutations,
    };
};
