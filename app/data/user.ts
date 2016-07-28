import { Injectable } from '@angular/core';

@Injectable()
export class User {
    userName: string;
    passWord: string;
  constructor(
   ) { 
        this.userName="",
        this.passWord=""
    }
    
    get getUserName(): string {
        return this.userName;
    }
    set setUserName(uName: string) {
        this.userName = uName;
    }
     get getPassWord(): string {
        return this.passWord;
    }
    set setPassWord(pWord: string) {
        this.passWord = pWord;
    }
    
}