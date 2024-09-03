import { Component, OnDestroy, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { LoadingDialogComponent } from "./loading-dialog.component";

@Component({
  selector: "preview-exchange-dialog",
  standalone: true,
  template: `
    <div class="preview-dialog-container">
      <p class="dialog-title">Preview Swap</p>
      <img
        src="https://img.freepik.com/free-vector/flat-design-cryptocurrency-concept_23-2149166905.jpg?w=740&t=st=1725281595~exp=1725282195~hmac=3f021b7f0bac3d3bf02db1aec7d9f0173bc977d1f5fcf3fbd6824a95dbddc66c"
        alt="tokens-image"
      />

      <div class="swap-info">
        <div class="token-container">
          <p class="info-title">You Pay</p>
          <div class="token-quantity-info">
            <p class="swap-quantity">{{ token1.quantity }}</p>
            <div class="spacer"></div>
            <button class="token-1-icon">
              <!-- <img
                src="{{ token1.image }}"
                width="20"
                height="20"
                alt=""
                style="border-radius: 50%; margin-right:3px;"
              /> -->
              <span>{{ token1.tokenName }}</span>
            </button>
          </div>
          <p class="dollor-quantity">{{ "$" + token1.dollars }}</p>
        </div>
        <div class="token-container">
          <p class="info-title">You Receive</p>
          <div class="token-quantity-info">
            <p class="swap-quantity">{{ token2.quantity }}</p>
            <div class="spacer"></div>
            <button class="token-1-icon">
              <!-- <img
                src="{{ token1.image }}"
                width="20"
                height="20"
                alt=""
                style="border-radius: 50%; margin-right:3px;"
              /> -->
              <span>{{ token2.tokenName }}</span>
            </button>
          </div>
          <p class="dollor-quantity">{{ "$" + token2.dollars }}</p>
        </div>
      </div>

      <div class="exchange-rate-box">
        <div class="rate-box-1">
          <p>Exhange Rate:</p>
          <div class="spacer"></div>
          <p>1 BERA = 0.032 HONEY</p>
        </div>
        <div class="rate-box-2">
          <p>Minimum Received:</p>
          <div class="spacer"></div>
          <p>{{ token2.quantity - 0.1 * token2.quantity }}</p>
        </div>
      </div>
      <button class="swap-preview-button" type="button" (click)="swap()">Swap</button>
    </div>
  `,
  styleUrls: ["./preview-exchange-dialog.component.scss"],
})
export class PreviewExchangeDialogComponent implements OnInit, OnDestroy {
  token1 = { quantity: 2, tokenName: "BERA", dollars: 10 };
  token2 = { quantity: 0.064, tokenName: "HONEY", dollars: 56.25 };
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}
  ngOnDestroy(): void {}
  swap() {
    this.dialog.open(LoadingDialogComponent, {
      hasBackdrop: true,
      backdropClass: "bkdrop",
      panelClass: "dialogClass",
    });
  }
}
