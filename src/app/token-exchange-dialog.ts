import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  model,
} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { MatChipsModule } from "@angular/material/chips";
import { TOKENS } from "./tokens.constants";

@Component({
  selector: "token-exchange-dialog",
  template: `
    <div class="token-select-container">
      <p class="token-select-title">Select a token</p>
      <div class="input-container">
        <input
          type="text"
          [(ngModel)]="value"
          (ngModelChange)="getSearchResultSet($event)"
          name="tokenName"
          placeholder="Search for a token..."
        />
        <span class="suffix-icon">
          <span class="material-symbols-outlined"> search </span>
          <!-- Example with FontAwesome icon -->
        </span>
      </div>
      <div class="common-tokens">
        <!-- <mat-chip-set aria-label="Dog selection"> -->
        @for (token of Tokens; track token.name) {
        <button
          class="common-token-box"
          [mat-dialog-close]="getResult(token.name)"
        >
          <img
            src="{{ token.image }}"
            width="20"
            height="20"
            alt=""
            style="border-radius: 50%;"
          />
          <span>{{ token.name }}</span>
        </button>
        }
        <!-- </mat-chip-set> -->
      </div>
      <div class="result-set">
        @for(token of TokensList; track token.name){
        <button
          class="token-container"
          [mat-dialog-close]="getResult(token.name)"
        >
          <img
            src="{{ token.image }}"
            width="20"
            height="20"
            alt=""
            style="border-radius: 50%;"
          />
          <span class="result-set-token-name">{{ token.name }}</span>
          <span class="spacer"></span>
          <span class="result-set-token-trend">{{ token.trend }}</span>
        </button>
        }
      </div>
    </div>
  `,
  styleUrls: ["token-select.scss"],
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
    FormsModule,
    MatChipsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenExchangeDialog implements OnInit {
  value: string | undefined;

  readonly dialogRef = inject(MatDialogRef<TokenExchangeDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  Tokens = [...TOKENS];
  TokensList: any = [];

  onNoClick(): void {
    this.dialogRef.close();
  }
  ngOnInit(): void {
    this.TokensList = [...this.Tokens];
  }

  getResult(selectedToken: string) {
    return { tokenId: this.data.tokenId, tokenName: selectedToken };
  }

  getSearchResultSet(key: string) {
    this.TokensList = this.Tokens.filter((t) => {
      return t?.name?.toLowerCase()?.startsWith(key?.toLowerCase());
    });
  }
}

export interface DialogData {
  tokenId: string;
}
