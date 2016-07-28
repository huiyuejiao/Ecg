import { Component, OnInit } from '@angular/core';
import {userInfo} from '../data/userInfo';
import {Router} from '@angular/router';
import { LoginHeaderComponent } from '../login-header-component/loginHeader.component';

@Component({
    selector: 'project-name',
    templateUrl: 'app/project-name-component/projectName.component.html',
    styleUrls: [ 'app/app.css','app/project-name-component/projectName.component.css'],
    directives: [LoginHeaderComponent],
    inputs: ['projectnameShow']
})

export class ProjectNameComponent implements OnInit {
    tag: string = "ProjectNameComponent";
    projectnameShow: boolean = false;
    projects: String[] = [];
    newProject: string = "";
    userInfo: userInfo;

    constructor(private router: Router
    ) {
        console.log(this.tag + ": Constructor called");
    }

    ngOnInit() {
        this.userInfo = new userInfo();
       //setting the project name if the project name show is true.
        if(this.projectnameShow){
            this.newProject = JSON.parse(localStorage.getItem("userInfo")).currentProject;
        }
        
        //setting the logged in user, which is "carmanah" for now.
        if (localStorage.getItem("userInfo")) {
            this.projects = JSON.parse(localStorage.getItem("userInfo")).existingProjectsList;
        } else {
            this.userInfo.setUserName = localStorage.getItem("user");
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
        }
        
    }
    onClickContinue(newproject: string) {
        if (newproject) {
            let projectListFromStorage: string[];
            // getting the userInfo object from localStorage and adding the new project in it.
            projectListFromStorage = JSON.parse(localStorage.getItem("userInfo")).existingProjectsList;

            if (projectListFromStorage.indexOf(newproject) < 0) { //makes sure that no duplicate project exists in the local storage
                projectListFromStorage.push(newproject);
                this.userInfo.setProjectList = projectListFromStorage;
                //setting the localStorage object with the added project
                localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
                //setting the drop down menu with the new project.
                this.projects = JSON.parse(localStorage.getItem("userInfo")).existingProjectsList;
            }
            //change to location component...
            this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
            this.userInfo.currentProject = this.newProject;
            localStorage.setItem("userInfo", JSON.stringify(this.userInfo));

            this.router.navigate(['/location']);

        } else {
            alert("Please select a project from drop down or create a new project");
        }
    }

    onClickEdit() {
        console.log(this.tag + ": onClickEdit is pressed with");
        this.projectnameShow = false; //enabling the project name component for edits
        this.router.navigate(['/project-name']);
    }
    onSelectValue(value: string) {
        this.newProject = value;// setting user selected project 
    }
}