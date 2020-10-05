export interface HasLocation {
    readonly latitude: number | null;
    readonly longitude: number | null;
}

export class Location implements HasLocation {
    constructor(public readonly latitude: number, public readonly longitude: number) {}

    maximum(other: Location): Location {
        return new Location(
            other.latitude > this.latitude ? other.latitude : this.latitude,
            other.longitude > this.longitude ? other.longitude : this.longitude
        );
    }

    minimum(other: Location): Location {
        return new Location(
            other.latitude < this.latitude ? other.latitude : this.latitude,
            other.longitude < this.longitude ? other.longitude : this.longitude
        );
    }

    clone(): Location {
        return new Location(this.latitude, this.longitude);
    }
}

export class BoundingRectangle {
    constructor(public min: Location | null = null, public max: Location | null = null) {}

    empty(): boolean {
        return this.min == null || this.max == null;
    }

    include(l: Location): void {
        this.min = this.min == null ? l.clone() : this.min.minimum(l);
        this.max = this.max == null ? l.clone() : this.max.maximum(l);
    }

    contains(l: Location): boolean {
        if (this.min == null || this.max == null) {
            return false;
        }
        return (
            l.latitude >= this.min.latitude &&
            l.longitude >= this.min.longitude &&
            l.latitude <= this.max.latitude &&
            l.longitude <= this.max.longitude
        );
    }

    static around(center: Location, margin: number): BoundingRectangle {
        /*
		At 38 degrees North latitude:
		One degree of latitude equals approximately 364,000 feet (69
		miles), one minute equals 6,068 feet (1.15 miles), and
		one-second equals 101 feet.

		One-degree of longitude equals 288,200 feet (54.6 miles), one
		minute equals 4,800 feet (0.91 mile), and one second equals 80
		feet.
		*/
        const FeetPerLatitude = 364000; /* ft per degree */
        const FeetPerLongitude = 288200; /* ft per degree */
        const latitudeMargin = margin / FeetPerLatitude;
        const longitudeMargin = margin / FeetPerLongitude;
        const min = new Location(center.latitude - latitudeMargin, center.longitude - longitudeMargin);
        const max = new Location(center.latitude + latitudeMargin, center.longitude + longitudeMargin);
        return new BoundingRectangle(min, max);
    }
}

export class MapCenter {
    constructor(public readonly location: Location, public readonly bounds: BoundingRectangle, public readonly zoom: number) {}
}

export class MappedStation {
    constructor(
        public readonly id: number,
        public readonly deviceId: string,
        public readonly name: string,
        public readonly location: Location,
        public readonly deployStartTime: Date | null
    ) {}
}

export class MappedStations {
    constructor(public readonly center: MapCenter, public readonly stations: MappedStation[]) {}
}
