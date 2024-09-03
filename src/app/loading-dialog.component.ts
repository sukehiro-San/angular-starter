import { Component } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "loading-spinner",
  template: `
    <div class="loader-container">
      <div class="loader-div"></div>
      <p>Waiting for Wallet</p>
      <p>Swap BERA to HONEY</p>
    </div>
  `,
  imports: [MatProgressSpinnerModule],
  styleUrls: ["./loading-spinner.scss"],
  standalone: true,
})
export class LoadingDialogComponent {
  constructor() {}
}
