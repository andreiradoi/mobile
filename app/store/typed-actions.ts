import * as ActionTypes from "./actions";
import { FoundService } from "@/services/discover-station";

export class AddStationNetworkAction {
    type = ActionTypes.CONFIGURE_STATION_NETWORK;

    constructor(public readonly deviceId: string, public readonly ssid: string, public readonly password: string) {}
}

export class TryStationAction {
    type = ActionTypes.TRY_STATION;

    constructor(public readonly info: FoundService) {}
}
