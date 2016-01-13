import { NavigationInstruction } from 'aurelia-router';
import { AureliaAdal } from './aurelia-adal';
export declare class AdalAuthorizeStep {
    private aureliaAdal;
    constructor(aureliaAdal: AureliaAdal);
    run(routingContext: NavigationInstruction, next: any): void;
}
