import { Injectable } from '@angular/core';

@Injectable()
export class Optic {
    optic:string;
        constructor(
    ) {
        this.optic = "";
    }
    get getOptic():string{
        return this.optic;
    }
    set setOptic(optic:string){
        this.optic=optic;
    }
    
}