import { Injectable } from '@angular/core';

@Injectable()
export class RecommendedDevice {
    systemName: string;
    systemProfile: string;
    systemLumenOutput: number;
    spacing: number;
    systemsPerLane: number;
    systemUnitCost: number;
    quantityRequired: number;
    systemWattage: number;
    systemBatteries:number;
    systemPanels:number;
    constructor(
    ) {
        this.systemName = "";
        this.systemProfile = "";
        this.systemLumenOutput = 0;
        this.spacing = 0;
        this.systemsPerLane = 0;
        this.quantityRequired = 0;
        this.systemWattage = 0;
        this.systemBatteries=0;
        this.systemPanels=0;
    }
    get getSystemName(): string {
        return this.systemName;
    }
    set setSystemName(sName: string) {
        this.systemName = sName;
    }

    get getSystemProfile(): string {
        return this.systemProfile;
    }
    set setSystemProfile(sProfileName: string) {
        this.systemProfile = sProfileName;
    }

    get setSystemLumenOutput(): number {
        return this.systemLumenOutput;
    }
    set setSystemLumenOutput(sLumenOutput: number) {
        this.systemLumenOutput = sLumenOutput;
    }

    get getSpacing(): number {
        return this.spacing;
    }
    set setSpacing(spacing: number) {
        this.spacing = spacing;
    }

    get getSystemPerLane(): number {
        return this.systemsPerLane;
    }
    set setSystemPerLane(sPerLane: number) {
        this.systemsPerLane = sPerLane;
    }

    get getSystemCost(): number {
        return this.systemUnitCost;
    }
    set setSystemCost(sCost: number) {
        this.systemUnitCost = sCost;
    }

    get getQuantityRequired(): number {
        return this.quantityRequired;
    }
    set setQuantityRequired(qRequired: number) {
        this.quantityRequired = qRequired;
    }

    get getSystemWattage(): number {
        return this.systemWattage;
    }
    set setSystemWattage(sWattage: number) {
        this.systemWattage = sWattage;
    }
    get getSystemBatteries(): number {
        return this.systemBatteries;
    }
    set setsystemBatteries(sBatteries: number) {
        this.systemBatteries = sBatteries;
    }

    get getSystemPanels(): number {
        return this.systemWattage;
    }
    set setSystemPanels(sPanels: number) {
        this.systemWattage = sPanels;
    }

}
