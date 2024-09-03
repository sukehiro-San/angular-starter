import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { TokenExchangeDialog } from "./token-exchange-dialog";
import {
  EXCHANGE_RATE,
  EXCHANGE_RATE_DISPLAY,
  TOKENS,
} from "./tokens.constants";
import { PreviewExchangeDialogComponent } from "./preview-exchange-dialog.component";
import { Subscription } from "rxjs";

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
              <button class="token-1" (click)="openDialog('token1')">
                @if(token1.token !== "--Select--"){<img
                  src="{{ token1.image }}"
                  width="20"
                  height="20"
                  alt=""
                  style="border-radius: 50%; margin-right:3px;"
                />} <span>{{ token1.token }}</span
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
              <button class="token-1" (click)="openDialog('token2')">
                @if(token2.token !== "--Select--"){<img
                  src="{{ token2.image }}"
                  width="20"
                  height="20"
                  alt=""
                  style="border-radius: 50%; margin-right:3px;"
                />} <span>{{ token2.token }}</span
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
              <p>{{ exchangeRate }}</p>
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
            (click)="openPreviewDialog()"
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
export class AppComponent implements OnInit, OnDestroy {
  token1: tokenInterface = {
    value: null,
    token: "BERA",
    image:
      "https://as2.ftcdn.net/v2/jpg/07/48/40/61/1000_F_748406134_w9J37XFCMLDyT0nWXbCzTd89czAJXFu3.jpg",
  };
  token2: tokenInterface = {
    value: null,
    token: "HONEY",
    image:
      "https://as1.ftcdn.net/v2/jpg/05/69/24/54/1000_F_569245416_BErGinYgza2Cy4vBMcrCVoi5GAQhMckd.webp",
  };
  selectedRate: string | undefined;
  tokenDialogRef: MatDialogRef<any> | undefined;
  ExchangeRateDisplay = { ...EXCHANGE_RATE_DISPLAY };
  ExchangeRates = { ...EXCHANGE_RATE };
  Tokens = [...TOKENS];
  exchangeRate = "";
  dialogSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.selectedRate =
      `${this.token1.token} to ${this.token2.token}` || "BERA to HONEY";
    this.exchangeRate = this.getRate();
  }

  convertRateToken1(ev: any) {
    this.selectedRate = `${this.token1.token} to ${this.token2.token}`;
    this.exchangeRate = this.getRate();
    this.token2.value = this.ExchangeRates[this.selectedRate] * ev;
  }

  convertRateToken2(ev: any) {
    // console.log(ev);
    this.selectedRate = `${this.token2.token} to ${this.token1.token}`;
    this.exchangeRate = this.getRate();
    this.token1.value = this.ExchangeRates[this.selectedRate] * ev;
  }

  constructor(private dialog: MatDialog) {}

  openDialog(whichToken: string) {
    this.tokenDialogRef = this.dialog.open(TokenExchangeDialog, {
      hasBackdrop: true,
      backdropClass: "bkdrop",
      panelClass: "dialogClass",
      data: {
        tokenId: whichToken,
      },
    });
    this.dialogSubscription = this.tokenDialogRef
      .afterClosed()
      .subscribe((result) => {
        if (result?.tokenId === "token1" && result?.tokenName) {
          this.token1.token = result?.tokenName;
          this.token2.token =
            result.tokenName === this.token2.token
              ? "--Select--"
              : this.token2.token;
          this.token1.image = this.Tokens.find(
            (t) => t?.name === result?.tokenName
          )?.image as string;
          this.token1.value = null;
          this.token2.value = null;
          this.selectedRate = `${this.token1.token} to ${this.token2.token}`;
          this.exchangeRate = this.getRate();
        }
        if (result?.tokenId === "token2" && result?.tokenName) {
          this.token2.token = result?.tokenName;
          this.token1.token =
            result.tokenName === this.token1.token
              ? "--Select--"
              : this.token1.token;
          this.token2.image = this.Tokens.find(
            (t) => t?.name === result?.tokenName
          )?.image as string;
          this.token2.value = null;
          this.token1.value = null;
          this.selectedRate = `${this.token1.token} to ${this.token2.token}`;
          this.exchangeRate = this.getRate();
        }
      });
  }

  invertTokens() {
    const temp = { ...this.token1 };
    this.token1 = { ...this.token2 };
    this.token2 = { ...temp };
    this.token1.value = null;
    this.token2.value = null;
    this.selectedRate = `${this.token1.token} to ${this.token2.token}`;
    this.exchangeRate = this.getRate();
  }

  getRate() {
    return this.ExchangeRateDisplay[this.selectedRate as string];
  }

  openPreviewDialog() {
    if (
      this.token1.token === "--Select--" ||
      this.token2.token === "--Select--"
    ) {
      return;
    }
    this.tokenDialogRef = this.dialog.open(PreviewExchangeDialogComponent, {
      hasBackdrop: true,
      backdropClass: "bkdrop",
      panelClass: "dialogClass",
    });
  }

  ngOnDestroy(): void {
    this.tokenDialogRef?.close();
    this.dialogSubscription?.unsubscribe();
  }
}

interface tokenInterface {
  value: null | number;
  token: string;
  image: string;
}
