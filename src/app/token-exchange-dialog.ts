import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";
import { MatButtonModule } from "@angular/material/button";
import { ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: "token-exchange-dialog",
  template: `
    <div class="token-select-container">
        <button>Sunnt</button>
    </div>
  `,
  styleUrls:["token-select.scss"],
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TokenExchangeDialog {}
