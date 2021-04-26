const { pathsToModuleNameMapper } = require("ts-jest/utils");
const { compilerOptions } = require("./tsconfig.json");

const mappedFromTsc = pathsToModuleNameMapper(compilerOptions.paths, { prefix: "<rootDir>/" });

const mappedAdditional = {
    "^vue$": "vue",
};

const moduleNameMapper = { ...mappedFromTsc, ...mappedAdditional };

module.exports = {
    preset: "ts-jest",
    globals: {
        __ENV__: "test",
        TNS_ENV: "test",
        "ts-jest": {
            diagnostics: true,
            tsconfig: "tsconfig.json",
        },
        FK_VERSION: "tests",
        FK_BUILD_TIMESTAMP: "",
        FK_BUILD_NUMBER: "",
        FK_BUILD_TAG: "",
        FK_BUILD_JOB: "",
        FK_GIT_COMMIT: "",
        FK_GIT_BRANCH: "",
    },
    transform: {
        "^.+\\.ts$": "ts-jest",
        "^.+\\.js$": "babel-jest",
        "^.+\\.vue$": "vue-jest",
    },
    moduleNameMapper: moduleNameMapper,
    transformIgnorePatterns: [],
    setupFiles: ["./app/tests/setup.ts"],
    testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    testPathIgnorePatterns: ["/lib/", "/node_modules/"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
    collectCoverage: false,
};
