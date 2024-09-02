import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { ChangeDetectionStrategy, Component } from "@angular/core";
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
          name="tokenName"
          placeholder="Enter text"
        />
        <span class="suffix-icon">
          <span class="material-symbols-outlined"> search </span>
          <!-- Example with FontAwesome icon -->
        </span>
      </div>
      <div class="common-tokens">
        <mat-chip-set aria-label="Dog selection">
          @for (token of Tokens; track token.name) {
          <mat-chip>
            <img matChipAvatar src="{{ token.image }}" alt="{{ token.name }}" />
            {{ token.name }}
          </mat-chip>
          }
        </mat-chip-set>
      </div>
      <div class="result-set">
        @for(token of Tokens; track token.name){
        <div class="token-container"></div>
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
export class TokenExchangeDialog {
  value: string | undefined;

  Tokens = [...TOKENS]
}
