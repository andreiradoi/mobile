import _ from "lodash";
import Vuex from "vuex";
import { nearby } from "./modules/nearby";
import { stations } from "./modules/stations";
import { phone } from "./modules/phone";
import { nav } from "./modules/nav";
import { network } from "./modules/network";
import { map } from "./modules/map";
import { syncing } from "./modules/syncing";
import { firmware } from "./modules/firmware";
import { media } from "./modules/media";
import { notes } from "./modules/notes";
import { portal } from "./modules/portal";
import { cal } from "./modules/cal";
import createLogger from "./logger";
import * as MutationTypes from "./mutations";
import * as ActionTypes from "./actions";
import Config from "../config";

export * from "./typed-actions";

function customizeLogger() {
    return createLogger({
        filter(mutation, stateBefore, stateAfter) {
            if (mutation.type == MutationTypes.TRANSFER_PROGRESS) {
                console.log("mutation:", mutation.type);
                return false;
            }
            if (mutation.type == MutationTypes.FIND || mutation.type == MutationTypes.LOSE) {
                console.log("mutation:", mutation.type, JSON.stringify(mutation.payload));
                return false;
            }
            if (mutation.type == MutationTypes.STATION_ACTIVITY || mutation.type == MutationTypes.STATION_QUERIED) {
                console.log("mutation:", mutation.type, JSON.stringify(mutation.payload));
                return false;
            }
            if (mutation.type == MutationTypes.NAVIGATION) {
                console.log("mutation:", mutation.type, mutation.payload);
                return false;
            }
            if (mutation.type == MutationTypes.PHONE_LOCATION) {
                console.log("mutation:", mutation.type);
                return false;
            }
            if (mutation.type == MutationTypes.PHONE_NETWORK) {
                console.log("mutation:", mutation.type, JSON.stringify(mutation.payload)); // PRIVACY ANONYMIZE
                return false;
            }
            if (mutation.type == MutationTypes.STATIONS) {
                console.log(
                    "mutation:",
                    mutation.type,
                    _(mutation.payload)
                        .map((s) => s.name)
                        .value()
                );
                return false;
            }
            if (/CALIBRAT/.test(mutation.type)) {
                console.log("mutation:", mutation.type);
                return false;
            }
            if (mutation.type == MutationTypes.ATTACH_NOTE_MEDIA) {
                console.log("mutation:", JSON.stringify(mutation));
                return false;
            }

            console.log("mutation:", mutation.type);

            return false;
        },
        actionFilter(action, state) {
            if (action.type == ActionTypes.REFRESH) {
                return false;
            }
            if (action.type == ActionTypes.QUERY_NECESSARY) {
                return false;
            }
            if (action.type == ActionTypes.QUERY_STATION) {
                console.log("action:", action.type, JSON.stringify(action.payload.url));
                return false;
            }
            if (action.type == ActionTypes.STATION_REPLY) {
                const device = action.payload?.statusReply?.status?.identity?.device;
                if (!device) {
                    console.log("action:", action.type, action);
                } else {
                    console.log("action:", action.type);
                }
                return false;
            }
            if (action.type == ActionTypes.STATIONS_LOADED) {
                console.log("action:", action.type);
                return false;
            }
            return true;
        },
        transformer(state) {
            const { nearby, stations, phone, map, network, nav, syncing, firmware, media, notes, portal, cal } = state;
            return {
                nav,
                phone,
                nearby,
                map,
                network,
                syncing: syncing,
                firmware,
                media,
                notes: {
                    activeStationId: notes.activeStationId,
                    stations: _.size(stations),
                },
                portal,
                cal,
                stations: {
                    deviceIds: _(stations.all)
                        .keyBy((s) => s.deviceId)
                        .mapValues((s) => {
                            return {
                                name: s.name,
                            };
                        })
                        .value(),
                },
            };
        },
        mutationTransformer(mutation) {
            return mutation;
        },
        actionTransformer(action) {
            return action;
        },
        logActions: true,
        logMutations: true,
    });
}

export default function () {
    return new Vuex.Store({
        plugins: Config.env.dev ? [customizeLogger()] : [customizeLogger()],
        modules: {
            nearby,
            stations,
            phone,
            nav,
            network,
            map,
            syncing,
            firmware,
            media,
            notes,
            portal,
            cal,
        },
        // This was causing a call stack error (_traverse)
        strict: false, // process.env.NODE_ENV !== "production",
    });
}
