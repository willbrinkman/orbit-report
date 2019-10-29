export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    satList: string[] = ["Space Debris", "Communication", "Probe", "Positioning", "Space Station", "Telescope"]

    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean) {
        this.name = name;
        this.type = type;
        this.launchDate = launchDate;
        this.orbitType = orbitType;
        this.operational = operational;
    }

    shouldShowWarning(): boolean {
        if (this.type === 'Space Debris') {
            return true;
        }
        return false;
    }

}