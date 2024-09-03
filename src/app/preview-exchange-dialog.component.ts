import { Component, OnDestroy, OnInit, inject } from "@angular/core";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { LoadingDialogComponent } from "./loading-dialog.component";
import { tokenInterface } from "./app.component";
import { DOLLARS_EXCHANGE, EXCHANGE_RATE_DISPLAY } from "./tokens.constants";

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
            <p class="swap-quantity">{{ data.token1.value }}</p>
            <div class="spacer"></div>
            <button class="token-icon">
              <img
                src="{{ data.token1.image }}"
                width="20"
                height="20"
                alt=""
                style="border-radius: 50%; margin-right:3px;"
              />
              <span>{{ data.token1.token }}</span>
            </button>
          </div>
          <p class="dollor-quantity">
            {{ "$" + dollars[data.token1.token] + "/-" }}
          </p>
        </div>
        <div class="token-container">
          <p class="info-title">You Receive</p>
          <div class="token-quantity-info">
            <p class="swap-quantity">{{ data.token2.value }}</p>
            <div class="spacer"></div>
            <button class="token-icon">
              <img
                src="{{ data.token2.image }}"
                width="20"
                height="20"
                alt=""
                style="border-radius: 50%; margin-right:3px;"
              />
              <span>{{ data.token2.token }}</span>
            </button>
          </div>
          <p class="dollor-quantity">
            {{ "$" + dollars[data.token2.token] + " /-" }}
          </p>
        </div>
      </div>

      <div class="exchange-rate-box">
        <div class="rate-box-1">
          <p>Exhange Rate:</p>
          <div class="spacer"></div>
          <p>{{ selectedRate ? exchangeRates[selectedRate] : "---" }}</p>
        </div>
        <div class="rate-box-2">
          <p>Minimum Received:</p>
          <div class="spacer"></div>
          <p>
            {{
              (data.token2.value || 0) -
                0.1 * (data.token2.value || 0) +
                " " +
                data.token2.token
            }}
          </p>
        </div>
      </div>
      <button class="swap-preview-button" type="button" (click)="swap()">
        Swap
      </button>
    </div>
  `,
  styleUrls: ["./preview-exchange-dialog.component.scss"],
})
export class PreviewExchangeDialogComponent implements OnInit, OnDestroy {
  token1 = { quantity: 2, tokenName: "BERA", dollars: 10 };
  token2 = { quantity: 0.064, tokenName: "HONEY", dollars: 56.25 };

  // readonly dialogRef = inject(MatDialogRef<TokenExchangeDialog>);
  readonly data = inject<previewData>(MAT_DIALOG_DATA);
  loaderRef!: MatDialogRef<LoadingDialogComponent, any>;
  readonly dollars = { ...DOLLARS_EXCHANGE };
  selectedRate!: string;
  exchangeRates = { ...EXCHANGE_RATE_DISPLAY };
  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<PreviewExchangeDialogComponent>
  ) {}
  ngOnInit(): void {
    this.selectedRate = `${this.data.token1.token} to ${this.data.token2.token}`;
  }
  ngOnDestroy(): void {}
  swap() {
    this.loaderRef = this.dialog.open(LoadingDialogComponent, {
      hasBackdrop: true,
      backdropClass: "bkdrop",
      panelClass: "dialogClass",
      disableClose: true,
    });

    this.loaderRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result === true) {
        this.dialogRef.close(true);
      }
    });
  }
}

export interface previewData {
  token1: tokenInterface;
  token2: tokenInterface;
}
