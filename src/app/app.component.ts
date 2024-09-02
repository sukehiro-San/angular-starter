import { Component, OnInit, inject } from "@angular/core";
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
            <div class="reverse-token-div" (click)="invertTokens()">
              <span
                class="material-symbols-outlined icon-span"
                style="font-size: 3em;"
              >
                sync_alt
              </span>
            </div>
            <div class="swap-box-token-1">
              <button class="token-1" (click)="openDialog()">
                <span>{{ token1.token }}</span
                ><span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </button>
              <div class="spacer"></div>
              <input
                type="number"
                min="0"
                class="token-swap-input"
                name="token-1"
                [(ngModel)]="token1.value"
                (ngModelChange)="convertRateToken1($event)"
                placeholder="0"
              />
            </div>
            <div class="swap-box-token-2">
              <button class="token-1" (click)="openDialog()">
                <span>{{ token2.token }}</span
                ><span class="material-symbols-outlined">
                  keyboard_arrow_down
                </span>
              </button>
              <div class="spacer"></div>
              <input
                type="number"
                min="0"
                class="token-swap-input"
                name="token-2"
                [(ngModel)]="token2.value"
                (ngModelChange)="convertRateToken2($event)"
                placeholder="0"
              />
            </div>
          </div>
          <div class="exchange-rate-box">
            <div class="rate-box-1">
              <p>Exhange Rate:</p>
              <div class="spacer"></div>
              <p>{{getRate()}}</p>
            </div>
            <div class="rate-box-2">
              <p>Network Fee:</p>
              <div class="spacer"></div>
              <p>---</p>
            </div>
          </div>
          <button class="swap-preview-button" type="button">
            <span> Preview</span>
            <span class="material-symbols-outlined"> arrow_forward </span>
          </button>
        </div>
      </main>
    </div>
  `,
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  token1: tokenInterface = {
    value: null,
    token: "BERA",
  };
  token2: tokenInterface = {
    value: null,
    token: "HONEY",
  };
  selectedRate: string | undefined;

  ngOnInit(): void {
    this.selectedRate =
      `${this.token1.token} to ${this.token2.token}` || "BERA to HONEY";
  }

  convertRateToken1(ev: any) {
    this.selectedRate = `${this.token1.token} to ${this.token2.token}`;
    this.token2.value = ExchangeRates[this.selectedRate] * ev;
  }

  convertRateToken2(ev: any) {
    this.selectedRate = `${this.token2.token} to ${this.token1.token}`;
    this.token1.value = ExchangeRates[this.selectedRate] * ev;
  }

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TokenExchangeDialog,{hasBackdrop:true});
  }

  invertTokens() {
    const temp = { ...this.token1 };
    this.token1 = { ...this.token2 };
    this.token2 = { ...temp };
    this.token1.value = null;
    this.token2.value = null;
    this.selectedRate = `${this.token1.token} to ${this.token2.token}`;
  }

  getRate(){
    return ExchangeRateDisplay[this.selectedRate as string]
  }
}

const ExchangeRates: { [key: string]: number } = {
  "BERA to HONEY": 0.032,
  "HONEY to BERA": 31.25,
};

const ExchangeRateDisplay: { [key: string]: string } = {
  "BERA to HONEY": "1 BERA = 0.032 HONEY",
  "HONEY to BERA": "1 HONEY = 31.25 BERA",
};

interface tokenInterface {
  value: null | number;
  token: string;
}
