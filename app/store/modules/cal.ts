import _ from "lodash";
import Vue from "vue";
import { ActionContext, Module } from "vuex";
import { ActionTypes, StationRepliedAction } from "../actions";
import { MutationTypes } from "../mutations";
import { Station, ServiceInfo, ModuleStatus } from "../types";
import { ServiceRef } from "@/services";
import { CalibrationState, GlobalGetters } from "./global";
import { calibrationStrategies, StationCalibration, AtlasCalValue } from "@/calibration";
import { fk_atlas as AtlasProto } from "fk-atlas-protocol/fk-atlas";
import CalibrationService, { WireAtlasReply } from "@/services/calibration-service";

export const CALIBRATED = "CALIBRATED";
export const CLEARED_CALIBRATION = "CLEARED_CALIBRATION";
export const CALIBRATION_REFRESH = "CALIBRATION_REFRESH";

export class ClearAtlasCalibration {
    public readonly type: string = ActionTypes.CLEAR_SENSOR_CALIBRATION;

    constructor(public readonly deviceId: string, public readonly moduleId: string, public readonly position: number) {}
}

export class CalibrateAtlas {
    public readonly type: string = ActionTypes.CALIBRATE_SENSOR;

    constructor(
        public readonly deviceId: string,
        public readonly moduleId: string,
        public readonly position: number,
        public readonly sensorType: AtlasProto.SensorType,
        public readonly value: AtlasCalValue,
        public readonly compensations: { temperature: number | null }
    ) {}
}

const getters = {
    stationCalibrations: (
        state: CalibrationState,
        _getters: never,
        _rootState: never,
        rootGetters: GlobalGetters
    ): { [index: number]: StationCalibration } => {
        return _(rootGetters.legacyStations)
            .map((station) => {
                return new StationCalibration(station, state.status, calibrationStrategies());
            })
            .keyBy((k) => k.id)
            .value();
    },
};

type ActionParameters = ActionContext<CalibrationState, never>;

const actions = (services: ServiceRef) => {
    return {
        [ActionTypes.STATIONS_LOADED]: ({ commit, dispatch, state }: ActionParameters, stations: Station[]) => {
            const updating = _.fromPairs(
                _.flatten(
                    stations.map((station) =>
                        station.modules.map((m) => {
                            if (m.status) {
                                return [m.moduleId, m.status];
                            }
                            return [];
                        })
                    )
                )
            );

            return commit(CALIBRATION_REFRESH, updating);
        },
        [ActionTypes.STATION_REPLY]: ({ commit, dispatch, state }: ActionParameters, payload: StationRepliedAction) => {
            const updating = _.fromPairs(
                payload.statusReply.modules.map((m) => {
                    if (m.status) {
                        return [m.moduleId, m.status];
                    }
                    return [];
                })
            );

            return commit(CALIBRATION_REFRESH, updating);
        },
        [ActionTypes.CLEAR_SENSOR_CALIBRATION]: ({ commit, dispatch, state }: ActionParameters, payload: ClearAtlasCalibration) => {
            const info = state.connected[payload.deviceId];
            if (!info) {
                throw new Error(`no info for nearby station ${payload.deviceId}`);
            }
            const service = new CalibrationService(services.conservify());
            const url = `${info.url}/modules/${payload.position}`;
            return service.clearCalibration(url).then((cleared) => {
                console.log("cal:", "cleared", payload.moduleId, cleared);
                return commit(CLEARED_CALIBRATION, { [payload.moduleId]: cleared });
            });
        },
        [ActionTypes.CALIBRATE_SENSOR]: ({ commit, dispatch, state }: ActionParameters, payload: CalibrateAtlas) => {
            const info = state.connected[payload.deviceId];
            if (!info) throw new Error(`no info for nearby station ${payload.deviceId}`);
            const service = new CalibrationService(services.conservify());
            const url = `${info.url}/modules/${payload.position}`;
            const params = {
                sensorType: payload.sensorType,
                which: payload.value.which,
                reference: payload.value.reference,
                compensations: payload.compensations,
            };
            return service.calibrateSensor(url, params).then((calibrated: ModuleStatus) => {
                console.log("cal:", "calibrated", payload.moduleId, calibrated);
                return commit(CALIBRATED, { [payload.moduleId]: calibrated });
            });
        },
    };
};

type PossibleCalibrations = WireAtlasReply;

const mutations = {
    [MutationTypes.RESET]: (state: CalibrationState) => {
        Object.assign(state, new CalibrationState());
    },
    [MutationTypes.FIND]: (state: CalibrationState, info: ServiceInfo) => {
        Vue.set(state.connected, info.deviceId, info);
    },
    [MutationTypes.LOSE]: (state: CalibrationState, info: ServiceInfo) => {
        Vue.set(state.connected, info.deviceId, null);
    },
    [CALIBRATED]: (state: CalibrationState, payload: { [index: string]: PossibleCalibrations }) => {
        Vue.set(state, "status", { ...state.status, ...payload });
    },
    [CLEARED_CALIBRATION]: (state: CalibrationState, payload: { [index: string]: PossibleCalibrations }) => {
        Vue.set(state, "status", { ...state.status, ...payload });
    },
    [CALIBRATION_REFRESH]: (state: CalibrationState, payload: { [index: string]: PossibleCalibrations }) => {
        Vue.set(state, "status", { ...state.status, ...payload });
    },
};

type ModuleType = Module<CalibrationState, never>;

export const cal = (services: ServiceRef): ModuleType => {
    const state = () => new CalibrationState();

    return {
        namespaced: false,
        state,
        getters,
        actions: actions(services),
        mutations,
    };
};
