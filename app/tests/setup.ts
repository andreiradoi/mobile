require("long");

import _ from "lodash";
import protobuf from "protobufjs";
import Vue from "vue";
import Vuex from "vuex";

(protobuf.util as any).Long = null;
protobuf.configure();

const windowAny = window as any;
windowAny.FK_BUILD_TIMESTAMP = "";
windowAny.FK_BUILD_NUMBER = "";
windowAny.FK_BUILD_TAG = "";
windowAny.FK_GIT_COMMIT = "";
windowAny.FK_GIT_BRANCH = "";

Vue.use(Vuex);

window["__extends"] = _.extend;

window._L = (key: string) => {
    return "unknown";
};

jest.mock("@nativescript/core");

jest.mock("@nativescript/firebase");
jest.mock("@nativescript/firebase/crashlytics");
jest.mock("@nativescript/firebase/analytics");
jest.mock("@nativescript/camera");
jest.mock("@nativescript/imagepicker");

jest.mock("nativescript-audio");
jest.mock("tns-core-modules/application-settings");

jest.mock("../wrappers/sqlite");
jest.mock("../wrappers/app-settings");
jest.mock("../wrappers/file-system");

jest.mock("../calibration/Check.vue");
jest.mock("../calibration/Prepare.vue");
jest.mock("../calibration/Wait.vue");

jest.mock("axios");
