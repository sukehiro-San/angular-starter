import { Component, OnDestroy, OnInit } from "@angular/core";
import { AppService } from "./app.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-home",
  template: `
    <div myDirective="orangered">Home Component Works!</div>
    <button (click)="logout()">Logout</button>
  `,
})
export class HomeComponent implements OnInit, OnDestroy {
  mainSub: undefined | Subscription;
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.mainSub = this.appService.getUserData().subscribe(
      (res) => {
        console.log(res);
      },
      (rej) => {
        console.log(rej);
      }
    );
  }

  logout($event: any = null) {
    this.appService.logout();
  }

  ngOnDestroy(): void {
      this.mainSub?.unsubscribe();
  }
}
