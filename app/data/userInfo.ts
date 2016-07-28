import { Injectable } from '@angular/core';

@Injectable()

export class userInfo {
    userName: string = "carmanah-dev";
    existingProjectsList: string[];
    location: string;
    latitude: number;
    longitude: number;
    currentProject: string;
    currentProjectType: string;

    constructor() {
        this.userName = "";
        this.location = "";
        this.latitude = 0;
        this.longitude = 0;
        this.existingProjectsList = [];
        this.currentProject = "";
        this.currentProjectType = "";
    }
    get getUserName(): string {
        return this.userName;
    }
    set setUserName(uName: string) {
        this.userName = uName;
    }
     get getCurrentProject(): string {
        return this.currentProject;
    }
    set setCurrentProject(cProject: string) {
        this.currentProject = cProject;
    }
    get getLocation(): string {
        return this.location;
    }
    set setLocation(loc: string) {
        this.location = loc;
    }
    get getLatitude(): number {
        return this.latitude;
    }
    set setLatitude(lat: number) {
        this.latitude = lat;
    }
    get getLongitude(): number {
        return this.longitude;
    }
    set setLongitude(long: number) {
        this.longitude = long;
    }
    get getProjectList(): string[] {
        return this.existingProjectsList;
    }
    set setProjectList(pList: string[]) {
        this.existingProjectsList = pList;
    }
     get getCurrentProjectType(): string {
        return this.currentProjectType;
    }
    set setCurrentProjectType(cpType: string) {
        this.currentProjectType = cpType;
    }
}