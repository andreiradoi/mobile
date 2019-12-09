import Config from "../config";
import Sqlite from "../wrappers/sqlite";
import Constants from "../constants";
import { sqliteToJs } from "../utilities";

const log = Config.logger("DbInterface");

const sqlite = new Sqlite();

// thirty seconds
const minInterval = 30;
// two weeks (in seconds)
const maxInterval = 1209600;

let databasePromise;

export default class DatabaseInterface {
    constructor() {
        databasePromise = this.openDatabase();
        this.databasePromise = databasePromise;
    }

    getDatabaseName() {
        if (TNS_ENV === "test") {
            return "test_fieldkit.sqlite3";
        }
        return "fieldkit.sqlite3";
    }

    openDatabase() {
        return sqlite.open(this.getDatabaseName()).then(db => {
            return (this.database = db);
        });
    }

    getDatabase() {
        return databasePromise;
    }

    getStationConfigs(stationId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM stations_config WHERE station_id = ?", [
                    stationId
                ])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getModuleConfigs(moduleId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM modules_config WHERE module_id = ?", [
                    moduleId
                ])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getDatabase() {
        return this.databasePromise;
    }

    getAll() {
        return this.getDatabase()
            .then(db => db.query("SELECT * FROM stations"))
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getStation(stationId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM stations WHERE id = ?", [stationId])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getStationByDeviceId(deviceId) {
        // newly discovered stations don't have ids yet, so check by deviceId
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM stations WHERE device_id = ?", [
                    deviceId
                ])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getModule(moduleId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM modules WHERE id = ?", [moduleId])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getModules(stationId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM modules WHERE station_id = ?", [
                    stationId
                ])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getSensors(moduleId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM sensors WHERE module_id = ?", [
                    moduleId
                ])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getFieldNotes(stationId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM fieldnotes WHERE station_id = ?", [
                    stationId
                ])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getFieldMedia(stationId) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM fieldmedia WHERE station_id = ?", [
                    stationId
                ])
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    setStationName(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET name = ? WHERE id = ?", [
                station.name,
                station.id
            ])
        );
    }

    setStationUrl(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET url = ? WHERE id = ?", [
                station.url,
                station.id
            ])
        );
    }

    setStationPortalID(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET portal_id = ? WHERE id = ?", [
                station.portalId,
                station.id
            ])
        );
    }

    setStationLocationCoordinates(station) {
        return this.getDatabase().then(db =>
            db.query(
                "UPDATE stations SET latitude = ?, longitude = ? WHERE id = ?",
                [station.latitude, station.longitude, station.id]
            )
        );
    }

    setStationLocationName(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET location_name = ? WHERE id = ?", [
                station.locationName,
                station.id
            ])
        );
    }

    setStationInterval(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET interval = ? WHERE id = ?", [
                station.interval,
                station.id
            ])
        );
    }

    setStationStudyObjective(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET study_objective = ? WHERE id = ?", [
                station.studyObjective,
                station.id
            ])
        );
    }

    setStationLocationPurpose(station) {
        return this.getDatabase().then(db =>
            db.query(
                "UPDATE stations SET location_purpose = ? WHERE id = ?",
                [station.locationPurpose, station.id]
            )
        );
    }

    setStationSiteCriteria(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET site_criteria = ? WHERE id = ?", [
                station.siteCriteria,
                station.id
            ])
        );
    }

    setStationSiteDescription(station) {
        return this.getDatabase().then(db =>
            db.query(
                "UPDATE stations SET site_description = ? WHERE id = ?",
                [station.siteDescription, station.id]
            )
        );
    }

    setStationDeployStatus(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET status = ? WHERE id = ?", [
                station.status,
                station.id
            ])
        );
    }

    setStationDeployStartTime(station) {
        return this.getDatabase().then(db =>
            db.query("UPDATE stations SET deploy_start_time = ? WHERE id = ?", [
                station.deployStartTime,
                station.id
            ])
        );
    }

    setModuleName(module) {
        return this.getDatabase().then(db =>
            db.query("UPDATE modules SET name = ? WHERE id = ?", [
                module.name,
                module.id
            ])
        );
    }

    setModuleInterval(module) {
        return this.getDatabase().then(db =>
            db.query("UPDATE modules SET interval = ? WHERE id = ?", [
                module.interval,
                module.id
            ])
        );
    }

    setModuleGraphs(module) {
        return this.getDatabase().then(db =>
            db.query("UPDATE modules SET graphs = ? WHERE id = ?", [
                module.graphs,
                module.id
            ])
        );
    }

    setCurrentReading(sensor) {
        return this.getDatabase().then(db =>
            db.query("UPDATE sensors SET current_reading = ? WHERE id = ?", [
                sensor.currentReading,
                sensor.id
            ])
        );
    }

    recordStationConfigChange(config) {
        return this.getDatabase().then(db =>
            db.query(
                "INSERT INTO stations_config (station_id, before, after, affected_field, author) VALUES (?, ?, ?, ?, ?)",
                [
                    config.stationId,
                    config.before,
                    config.after,
                    config.affectedField,
                    config.author
                ]
            )
        );
    }

    recordModuleConfigChange(config) {
        return this.getDatabase().then(db =>
            db.query(
                "INSERT INTO modules_config (module_id, before, after, affected_field, author) VALUES (?, ?, ?, ?, ?)",
                [
                    config.moduleId,
                    config.before,
                    config.after,
                    config.affectedField,
                    config.author
                ]
            )
        );
    }

    insertSensor(sensor) {
        return this.database.execute(
            "INSERT INTO sensors (module_id, name, unit, frequency, current_reading) VALUES (?, ?, ?, ?, ?)",
            [
                sensor.moduleId,
                sensor.name,
                sensor.unitOfMeasure,
                sensor.frequency,
                sensor.currentReading
            ]
        );
    }

    insertModule(module) {
        // Note: module_id and device_id are currently not stored
        return this.database.execute(
            "INSERT INTO modules (module_id, device_id, name, interval, station_id) VALUES (?, ?, ?, ?, ?)",
            [
                module.moduleId,
                module.deviceId,
                module.name,
                module.interval || 0,
                module.stationId
            ]
        );
    }

    insertStation(station, statusJson) {
        const newStation = new Station(station);
        return this.database.execute(
            `INSERT INTO stations (device_id, name, url, status, deploy_start_time, battery_level, consumed_memory, total_memory, consumed_memory_percent, interval, status_json, longitude, latitude) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                newStation.deviceId,
                newStation.name,
                newStation.url,
                newStation.status,
                newStation.deployStartTime,
                newStation.batteryLevel,
                newStation.consumedMemory,
                newStation.totalMemory,
                newStation.consumedMemoryPercent,
                newStation.interval,
                JSON.stringify(statusJson),
                newStation.longitude,
                newStation.latitude
            ]
        );
    }

    insertFieldNote(note) {
        return this.database.execute(
            "INSERT INTO fieldnotes (station_id, note, audio_file, category, author) VALUES (?, ?, ?, ?, ?)",
            [
                note.stationId,
                note.note,
                note.audioFile,
                note.category,
                note.author
            ]
        );
    }

    insertFieldMedia(media) {
        return this.database.execute(
            "INSERT INTO fieldmedia (station_id, image_name, image_label, category, author) VALUES (?, ?, ?, ?, ?)",
            [
                media.stationId,
                media.imageName,
                media.imageLabel,
                media.category,
                media.author
            ]
        );
    }

    removeFieldNote(noteId) {
        return this.getDatabase().then(db =>
            db.query("DELETE FROM fieldnotes WHERE id = ?", [
                noteId
            ])
        );
    }

    removeFieldNoteByAudioFile(audioFile) {
        return this.getDatabase().then(db =>
            db.query("DELETE FROM fieldnotes WHERE audio_file = ?", [
                audioFile
            ])
        );
    }

    removeFieldMedia(mediaId) {
        return this.getDatabase().then(db =>
            db.query("DELETE FROM fieldmedia WHERE id = ?", [
                mediaId
            ])
        );
    }

    insertDownload(download) {
        return this.insertDownloads([download]);
    }

    insertDownloads(downloads) {
        return Promise.all(
            downloads.map(download => {
                return this.database
                    .execute(
                        `INSERT INTO downloads (station_id, device_id, generation, path, type, timestamp, url, size, blocks, first_block, last_block) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
                        [
                            download.stationId,
                            download.deviceId,
                            download.generation,
                            download.path,
                            download.type,
                            download.timestamp,
                            download.url,
                            download.size,
                            download.blocks,
                            download.firstBlock,
                            download.lastBlock
                        ]
                    )
                    .then(() => {
                        const values = [
                            download.size,
                            download.firstBlock,
                            download.lastBlock,
                            download.stationId,
                            download.type
                        ];
                        return this.database.execute(
                            `UPDATE streams SET download_size = ?, download_first_block = ?, download_last_block = ? WHERE station_id = ? AND type = ?`,
                            values
                        );
                    });
            })
        );
    }

    getAllDownloads() {
        return this.getDatabase()
            .then(db => db.query("SELECT * FROM downloads"))
            .then(rows => sqliteToJs(rows));
    }

    getPendingDownloads() {
        return this.getDatabase()
            .then(db =>
                db.query(
                    "SELECT * FROM downloads WHERE size > 0 AND uploaded IS NULL"
                )
            )
            .then(rows => sqliteToJs(rows));
    }

    getDownloadsByStationId(id) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM downloads WHERE station_id = ?", [id])
            )
            .then(rows => sqliteToJs(rows));
    }

    getDownloadsByStationIds(ids) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT * FROM downloads WHERE station_id IN (?)", [
                    ids
                ])
            )
            .then(rows => sqliteToJs(rows));
    }

    markDownloadAsUploaded(download) {
        return this.getDatabase().then(db =>
            db.query("UPDATE downloads SET uploaded = ? WHERE id = ?", [
                new Date(),
                download.id
            ])
        );
    }

    getStreams() {
        return this.getDatabase()
            .then(db => db.query(`SELECT * FROM streams`))
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getStreamsByStationIds(ids) {
        return this.getDatabase()
            .then(db =>
                db.query(`SELECT * FROM streams WHERE station_id IN ($1)`, ids)
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getStreamsByStationId(stationId) {
        return this.getDatabase()
            .then(db =>
                db.query(
                    `SELECT * FROM streams WHERE station_id = $1`,
                    stationId
                )
            )
            .then(rows => {
                return sqliteToJs(rows);
            });
    }

    getStreamsByStation(station) {
        return this.getStreamsByStationId(station.id);
    }

    updateStationFromPortal(station, status) {
        if (!station.id) {
            return Promise.reject();
        }
        return this._updateStreamFromPortal(
            station,
            status,
            Constants.MetaStreamType,
            1
        ).then(() => {
            return this._updateStreamFromPortal(
                station,
                status,
                Constants.DataStreamType,
                0
            ).then(() => {
                return this.getStreamsByStation(station);
            });
        });
    }

    _updateStreamFromPortal(station, status, type, index) {
        return this.getDatabase()
            .then(db =>
                db.query(
                    "SELECT id FROM streams WHERE station_id = ? AND type = ?",
                    [station.id, type]
                )
            )
            .then(streamId => {
                if (streamId.length == 0) {
                    return Promise.reject();
                }
                log.info("updating stream", station.id, type, streamId);
                const provision = _(status.provisions)
                    .orderBy("updated")
                    .last();
                const values = [
                    provision[type].size,
                    provision[type].first,
                    provision[type].last,
                    streamId[0].id
                ];
                return this.getDatabase().then(db =>
                    db.query(
                        `UPDATE streams SET portal_size = ?, portal_first_block = ?, portal_last_block = ? WHERE id = ?`,
                        values
                    )
                );
            });
    }

    _updateStreamFromStation(station, status, type, index) {
        if (!status.streams) {
            return Promise.reject();
        }
        return this.getDatabase()
            .then(db =>
                db.query(
                    "SELECT id FROM streams WHERE station_id = ? AND type = ?",
                    [station.id, type]
                )
            )
            .then(streamId => {
                if (streamId.length > 0) {
                    const values = [
                        status.streams[index].size,
                        status.streams[index].block,
                        new Date(),
                        streamId[0]
                    ];
                    return this.getDatabase().then(db =>
                        db.query(
                            `UPDATE streams SET device_size = ?, device_last_block = ?, updated = ? WHERE id = ?`,
                            values
                        )
                    );
                } else {
                    const values = [
                        station.id,
                        station.deviceId,
                        type,
                        status.streams[index].size,
                        0,
                        status.streams[index].block,
                        new Date()
                    ];
                    return this.getDatabase().then(db =>
                        db.query(
                            `INSERT INTO streams (station_id, device_id, type, device_size, device_first_block, device_last_block, updated) VALUES (?, ?, ?, ?, ?, ?, ?)`,
                            values
                        )
                    );
                }
            });
    }

    updateStationStatus(station, status) {
        return this.getDatabase()
            .then(db =>
                db.query(
                    "UPDATE stations SET status_json = ? WHERE id = ?",
                    JSON.stringify(status),
                    station.id
                )
            )
            .then(() => {
                return this._updateStreamFromStation(
                    station,
                    status,
                    Constants.MetaStreamType,
                    1
                ).then(() => {
                    return this._updateStreamFromStation(
                        station,
                        status,
                        Constants.DataStreamType,
                        0
                    );
                });
            });
    }

    getStationStatusByDeviceId(deviceId) {
        return this.getDatabase()
            .then(db =>
                db.query(
                    "SELECT status_json FROM stations WHERE device_id = ?",
                    deviceId
                )
            )
            .then(json => {
                return JSON.parse(json);
            });
    }

    getStationStatusById(id) {
        return this.getDatabase()
            .then(db =>
                db.query("SELECT status_json FROM stations WHERE id = ?", id)
            )
            .then(json => {
                return JSON.parse(json);
            });
    }
}

class Station {
    constructor(_station) {
        // created_at, and updated_at will be generated
        this.deviceId = _station.deviceId;
        this.name = _station.name;
        this.url = _station.url ? _station.url : "no_url";
        this.status = _station.status;
        this.deployStartTime = _station.deployStartTime;
        this.batteryLevel = _station.batteryLevel;
        this.consumedMemoryPercent = _station.consumedMemoryPercent;
        this.consumedMemory = _station.consumedMemory;
        this.totalMemory = _station.totalMemory;
        this.interval = _station.interval
            ? _station.interval
            : Math.round(Math.random() * maxInterval + minInterval);
        this.longitude = _station.longitude;
        this.latitude = _station.latitude;
    }
}
