import { Injectable } from '@angular/core';

@Injectable()
export class SystemPrice {

    fixtureCount: number;
    fixture: string;
    colorTemperature: string;
    distributionKey: string;
    deviceProfile: string;
    tilt: number;
    targetAutonomy: number;
    latitude: number;
    longitude: number;
    simulationType: string;
    lightingReq: string;
    laneWidth: number;
    averageLaneWidth: number;
    numberOfLanes: number;
    lvdCheck: boolean;
    engineOptions: string;
    systemColor: string;
    fixtureColor: string;
    batteryMount: string;
    devices: any[];

    constructor() {
        this.simulationType = "Individual System";
        this.lightingReq = "0.5ft/cd";
        this.laneWidth = 20;
        this.averageLaneWidth = 200;
        this.numberOfLanes = 5;
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
        this.engineOptions = "%";
        this.batteryMount = "%";
        this.systemColor = "";
        this.fixtureColor = "%";
        this.batteryMount = "%";
        this.devices = [];
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
        get getsimulationType(): string {
        return this.simulationType;
    }
    set setSimulationType(simulationType: string) {
        this.simulationType = simulationType;
    }
}