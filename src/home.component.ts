import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
    selector: "app-home",
    template: `
        <div myDirective="orangered">Home Component Works!</div>
        <button (click)="logout()">Logout</button>
    `
})
export class HomeComponent {
    constructor(private appService: AppService) { }

    logout($event: any = null) {
        this.appService.logout();
    }
}