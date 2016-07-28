import { Injectable } from '@angular/core';

@Injectable()
export class Device {
    deviceName: string;
    panelKey: string;
    batteryKey: string;
    totalPanels: number;
    totalBatteries: number;
    constructor(
    ) {
        this.deviceName = "";
        this.panelKey = "";
        this.batteryKey = "";
        this.totalPanels = 0;
        this.totalBatteries = 0;
    }

    get getDeviceName(): string {
        return this.deviceName;
    }
    set setDeviceName(dName: string) {
        this.deviceName = dName;
    }

    get getPanelKey(): string {
        return this.panelKey;
    }
    set setPanelKey(pKey: string) {
        this.panelKey = pKey;
    }

    get getBatteryKey(): string {
        return this.batteryKey;
    }
    set setBatteryKey(bKey: string) {
        this.batteryKey = bKey;
    }

    get getTotalPanels(): number {
        return this.totalPanels;
    }
    set setTotalPanels(totalPanel: number) {
        this.totalPanels = totalPanel;
    }

    get getTotalBatteries(): number {
        return this.totalBatteries;
    }
    set setTotalBatteries(totalBatteries: number) {
        this.totalBatteries = totalBatteries;
    }
}
