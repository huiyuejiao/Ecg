import { Injectable } from '@angular/core';

@Injectable()
export class SubmittalPackage {
    projectName: string;
    customerName: string;
    location: string;
    latitude: number;
    longitude: number;
    fixture: string;
    fixtureCount: number;
    colorTemperature: string;
    distributionKey: string;
    deviceProfile: string;
    tilt: number;
    targetAutonomy: number;
    lvdCheck: boolean;
    deviceName: string;
    panelKey: string;
    batteryKey: string;
    totalPanels: number;
    totalBatteries: number;
    batteryMount: string;
    engineOptions: string;
    fixtureColor: string;
    systemColor: string;
    optics: any[];

    constructor(
    ) {
        this.projectName = "";
        this.customerName = "";
        this.location = "";
        this.latitude = 0;
        this.longitude = 0;
        this.fixture = "";
        this.fixtureCount = 0;
        this.colorTemperature = "";
        this.distributionKey = "";
        this.deviceProfile = "";
        this.tilt = 0;
        this.targetAutonomy = 0;
        this.lvdCheck = true;
        this.deviceName = "";
        this.panelKey = "";
        this.batteryKey = "";
        this.totalPanels = 0;
        this.totalBatteries = 0;
        this.batteryMount = "%";
        this.engineOptions = "";
        this.fixtureColor = "%";
        this.systemColor = "%";
        this.optics = [];
    }

    get getProjectName(): string {
        return this.customerName;
    }
    set setProjectName(cName: string) {
        this.customerName = cName;
    }

    get getLocation(): string {
        return this.location;
    }
    set setlocation(location: string) {
        this.location = location;
    }

    get getLatitude(): number {
        return this.latitude;
    }
    set setLatitude(latitude: number) {
        this.latitude = latitude;
    }

    get getLongitude(): number {
        return this.longitude;
    }
    set setlongitude(longitude: number) {
        this.longitude = longitude;
    }

    get getFixture(): string {
        return this.fixture;
    }
    set setFixture(fixture: string) {
        this.fixture = fixture;
    }
    get getFixtureCount(): number {
        return this.fixtureCount;
    }
    set setFixtureCount(fixtureCount: number) {
        this.fixtureCount = fixtureCount;
    }
    get getColorTemperature(): string {
        return this.colorTemperature;
    }
    set setColorTemperature(cTemperature: string) {
        this.colorTemperature = cTemperature;
    }
    get getDistributionKey(): string {
        return this.distributionKey;
    }
    set setDistributionKey(dKey: string) {
        this.distributionKey = dKey;
    }
    get getDeviceProfile(): string {
        return this.deviceProfile;
    }
    set setdeviceProfile(dProfile: string) {
        this.deviceProfile = dProfile;
    }

    get getTilt(): number {
        return this.tilt;
    }
    set setTilt(tilt: number) {
        this.tilt = tilt;
    }
    get getTargetAutonomy(): number {
        return this.targetAutonomy;
    }
    set setTargetAutonomy(tAutonomy: number) {
        this.targetAutonomy = tAutonomy;
    }
    get getLvdCheck(): boolean {
        return this.lvdCheck;
    }
    set setLvdCheck(lvdCheck: boolean) {
        this.lvdCheck = lvdCheck;
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
    set setBatteryKey(batteryKey: string) {
        this.batteryKey = batteryKey;
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
    get getBatteryMount(): string {
        return this.batteryMount;
    }
    set setBatteryMount(batteryMount: string) {
        this.batteryMount = batteryMount;
    }

    get getEngineOptions(): string {
        return this.engineOptions;
    }
    set setEngineOptions(engineOptions: string) {
        this.engineOptions = engineOptions;
    }
    get getFixtureColor(): string {
        return this.fixtureColor;
    }
    set setFixtureColor(fixtureColor: string) {
        this.fixtureColor = fixtureColor;
    }
    get getSystemColor(): string {
        return this.systemColor;
    }
    set setSystemColor(systemColor: string) {
        this.systemColor = systemColor;
    }
}
