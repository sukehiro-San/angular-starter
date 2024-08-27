import { Component } from "@angular/core";
import { AppService } from "./app.service";

@Component({
    selector: "app-test",
    template: `
        <form>
            <input type="text" [(ngModel)]="username" name="username" placeholder="username"/>
            <input type="password" [(ngModel)]="password" name="password" placeholder="password"/>
            <button type="button" (click)="login()">Login</button>
        </form>
    `
})
export class TestComponent {
    username: string = '';
    password: string = '';

    constructor(private appService: AppService) { }

    login($event: any = null) {
        this.appService.login(this.username, this.password);
    }

}