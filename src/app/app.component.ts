import { Component, inject } from "@angular/core";
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { TokenExchangeDialog } from "./token-exchange-dialog";

@Component({
  selector: "app-root",
  template: `
    <div class="app-container">
      <nav class="app-navigation">
        <a class="nav-link" href="#">Swap</a>
        <a class="nav-link" href="#">Post</a>
        <a class="nav-link" href="#">Explore</a>
        <div class="spacer"></div>
        <button class="nav-link nav-button">Rewards</button>
        <button class="nav-link nav-button">0xa717...F4b6</button>
      </nav>

      <main>
        <div class="swap-box">
          <p class="swap-box-title">Swap</p>
          <div class="swap-box-tokens">
            <div class="reverse-token-div">
              <span
                class="material-symbols-outlined icon-span"
                style="font-size: 3em;"
              >
                sync_alt
              </span>
            </div>
            <div class="swap-box-token-1">
              <div class="token-1">
                <img src="" alt="">
              </div>
              <div class="spacer"></div>
              <p>1 BERA = 0.032 HONEY</p>
            </div>
            <div class="swap-box-token-2">
              <p>Exhange Rate:</p>
              <div class="spacer"></div>
              <p>1 BERA = 0.032 HONEY</p>
            </div>
          </div>
          <div class="exchange-rate-box">
            <div class="rate-box-1">
              <p>Exhange Rate:</p>
              <div class="spacer"></div>
              <p>1 BERA = 0.032 HONEY</p>
            </div>
            <div class="rate-box-2">
              <p>Network Fee:</p>
              <div class="spacer"></div>
              <p>---</p>
            </div>
          </div>
          <button
            class="swap-preview-button"
            type="button"
            (click)="openDialog()"
          >
            <span> Preview</span>
            <span class="material-symbols-outlined"> arrow_forward </span>
          </button>
        </div>
      </main>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TokenExchangeDialog);
  }
}
