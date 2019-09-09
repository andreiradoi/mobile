import Config from "../config";
import Sqlite from "../wrappers/sqlite";

const sqlite = new Sqlite();

export default class CreateDB {
    constructor(dbInterface) {
        this.dbInterface = dbInterface;
    }

    initialize() {
        return this.openDatabase()
            .then(() => {
                if (Config.dropTables) {
                    return this.dropTables();
                } else {
                    return Promise.resolve(this.database);
                }
            })
            .then(this.createStationsTable.bind(this))
            .then(this.createModulesTable.bind(this))
            .then(this.createSensorsTable.bind(this))
            .then(this.createStationConfigLogTable.bind(this))
            .then(this.createModuleConfigLogTable.bind(this))
            .then(() => {
                    if (Config.seedDB) {
                        return this.seedDB();
                    } else {
                        return Promise.resolve(this.database);
                    }
                },
                err => {
                    console.log("error", err);
                }
            );
    }

    getDatabaseName() {
        if (TNS_ENV === "test") {
            return "test_fieldkit.sqlite3";
        }
        return "fieldkit.sqlite3";
    }

    openDatabase() {
        return sqlite.open(this.getDatabaseName()).then(db => {
            // foreign keys are disabled by default in sqlite
            // enable them here
            db.execute(`PRAGMA foreign_keys = ON;`);
            return (this.database = db);
        });
    }

    execute(sql) {
        let sqlArray = sql;
        if (!Array.isArray(sql)) {
            sqlArray = [sql];
        }
        return sqlArray.reduce((promise, item, index) => {
            return promise
                .then(() => {
                    return this.database.execute(item);
                })
                .then(
                    rv => {
                        return rv;
                    },
                    err => {
                        console.log("error executing", sql, err);
                    }
                );
        }, Promise.resolve(true));
    }

    dropTables() {
        return this.execute([
            `DROP TABLE IF EXISTS stations_config`,
            `DROP TABLE IF EXISTS sensors`,
            `DROP TABLE IF EXISTS modules`,
            `DROP TABLE IF EXISTS stations`
        ]);
    }

    createSensorsTable() {
        return this.execute([
            `CREATE TABLE IF NOT EXISTS sensors (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT,
                unit TEXT,
                current_reading NUMERIC,
                frequency NUMERIC,
                created DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated DATETIME DEFAULT CURRENT_TIMESTAMP,
                module_id INTEGER,
                FOREIGN KEY(module_id) REFERENCES modules(id)
            )`,
            `CREATE INDEX IF NOT EXISTS sensor_module_idx ON sensors (module_id)`
        ]);
    }

    createModulesTable() {
        return this.execute([
            `CREATE TABLE IF NOT EXISTS modules (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                module_id TEXT,
                device_id TEXT,
                name TEXT,
                graphs TEXT,
                interval NUMERIC,
                created DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated DATETIME DEFAULT CURRENT_TIMESTAMP,
                station_id INTEGER,
                FOREIGN KEY(station_id) REFERENCES stations(id)
            )`,
            `CREATE UNIQUE INDEX IF NOT EXISTS modules_idx ON modules (device_id, module_id)`,
            `CREATE INDEX IF NOT EXISTS module_station_idx ON modules (station_id)`
        ]);
    }

    createStationsTable() {
        return this.execute([
            `CREATE TABLE IF NOT EXISTS stations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                device_id TEXT NOT NULL,
                name TEXT NOT NULL,
                url TEXT NOT NULL,
                status TEXT,
                battery_level NUMERIC,
                connected TEXT,
                available_memory NUMERIC,
                interval NUMERIC,
                location_name TEXT,
                latitude NUMERIC,
                longitude NUMERIC,
                deploy_image_name TEXT,
                deploy_image_label TEXT,
                deploy_note TEXT,
                deploy_audio_files TEXT,
                portal_id INTEGER,
                created DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated DATETIME DEFAULT CURRENT_TIMESTAMP
            )`,
            `CREATE UNIQUE INDEX IF NOT EXISTS stations_device_id_idx ON stations (device_id)`
        ]);
    }

    createStationConfigLogTable() {
        // Note: currently not enforcing foreign key constraints here,
        // in order to better persist tables
        return this.execute([
            `CREATE TABLE IF NOT EXISTS stations_config (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                station_id INTEGER,
                before TEXT,
                after TEXT,
                affected_field TEXT,
                author TEXT,
                created DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated DATETIME DEFAULT CURRENT_TIMESTAMP
            )`
        ]);
    }

    createModuleConfigLogTable() {
        return this.execute(
            `CREATE TABLE IF NOT EXISTS modules_config (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                module_id INTEGER,
                before TEXT,
                after TEXT,
                affected_field TEXT,
                author TEXT,
                created DATETIME DEFAULT CURRENT_TIMESTAMP,
                updated DATETIME DEFAULT CURRENT_TIMESTAMP
            )`
        );
    }

    seedDB() {
        return Promise.all(stations.map(this.addStation.bind(this))).then(this.handleModules.bind(this));
    }

    addStation(station) {
        return this.dbInterface.insertStation(station).then(id => {
            station.id = id;
            station.modules.map(m => {
                m.stationId = station.id;
            });
            return;
        });
    }

    handleModules() {
        let modules = stations.map(s => {
            return s.modules;
        });
        modules = [].concat.apply([], modules);
        return Promise.all(modules.map(this.insertModule.bind(this))).then(this.handleSensors.bind(this));
    }

    insertModule(module) {
        return this.dbInterface.insertModule(module).then(id => {
            module.id = id;
            module.sensors.map(s => {
                s.moduleId = module.id;
            });
            return;
        });
    }

    handleSensors() {
        let modules = stations.map(s => {
            return s.modules;
        });
        modules = [].concat.apply([], modules);
        let sensors = modules.map(m => {
            return m.sensors;
        });
        sensors = [].concat.apply([], sensors);
        return Promise.all(sensors.map(this.insertSensor.bind(this)));
    }

    insertSensor(sensor) {
        return this.dbInterface.insertSensor(sensor);
    }
}

const stations = [
    {
        deviceId: "seeded-device-0",
        name: "Drammen Station",
        status: "Ready to deploy",
        modules: [
            {
                moduleId: "seeded-device-0-module-0",
                deviceId: "seeded-device-0",
                name: "Water Module 1",
                sensors: [
                    {
                        name: "pH Sensor",
                        unit: "",
                        frequency: "60"
                    }
                ]
            },
            {
                moduleId: "seeded-device-0-module-1",
                deviceId: "seeded-device-0",
                name: "Water Module 2",
                sensors: [
                    {
                        name: "DO Sensor",
                        unit: "mg/L",
                        frequency: "60"
                    },
                    {
                        name: "Conductivity Sensor",
                        unit: "S/m",
                        frequency: "60"
                    }
                ]
            },
            {
                moduleId: "seeded-device-0-module-2",
                deviceId: "seeded-device-0",
                name: "Weather Module",
                sensors: [
                    {
                        name: "Temperature Sensor",
                        unit: "°C",
                        frequency: "60"
                    },
                    {
                        name: "Wind Sensor",
                        unit: "m/s",
                        frequency: "60"
                    },
                    {
                        name: "Rain Sensor",
                        unit: "mm/h",
                        frequency: "60"
                    }
                ]
            }
        ]
    },
    {
        deviceId: "seeded-device-1",
        name: "Eggjareid Station",
        status: "Deployed",
        modules: [
            {
                moduleId: "seeded-device-1-module-0",
                deviceId: "seeded-device-1",
                name: "Generic Module",
                sensors: [
                    {
                        name: "Configure Sensor",
                        unit: "",
                        frequency: "60"
                    }
                ]
            }
        ]
    },
    {
        deviceId: "seeded-device-2",
        name: "Evanger Station",
        status: "Deployed",
        modules: [
            {
                moduleId: "seeded-device-2-module-0",
                deviceId: "seeded-device-2",
                name: "Generic Module",
                sensors: [
                    {
                        name: "Configure Sensor",
                        unit: "",
                        frequency: "60"
                    }
                ]
            }
        ]
    },
    {
        deviceId: "seeded-device-3",
        name: "Finse Station",
        status: "Deployed",
        modules: [
            {
                moduleId: "seeded-device-3-module-0",
                deviceId: "seeded-device-3",
                name: "Generic Module",
                sensors: [
                    {
                        name: "Configure Sensor",
                        unit: "",
                        frequency: "60"
                    }
                ]
            }
        ]
    },
    {
        deviceId: "seeded-device-4",
        name: "Seeded Station #4",
        status: "Deployed",
        modules: [
            {
                moduleId: "seeded-device-4-module-0",
                deviceId: "seeded-device-4",
                name: "Generic Module",
                sensors: [
                    {
                        name: "Configure Sensor",
                        unit: "",
                        frequency: "60"
                    }
                ]
            }
        ]
    }
];
