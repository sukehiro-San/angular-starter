import { Component } from "@angular/core";

@Component({
    selector:"app-root",
    template:`
    <a routerLink="/home" routerLinkActive="active">Home</a>
    <a routerLink="/test" routerLinkActive="active">Test</a>
    <router-outlet></router-outlet>
  `,styleUrls:["./app.component.scss"]
})
export class AppComponent{}