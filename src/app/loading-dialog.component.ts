import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "loading-spinner",
  template: `
    <div class="loader-container">
      <div class="loader-div" [ngClass]="{ done: tokenSwapped }">
        <div class="checkmark"></div>
      </div>
      @if(!tokenSwapped){
      <p>Waiting for Wallet</p>
      <p>Swap BERA to HONEY</p>
      } @else {
      <p>Congratulations, Tokens Swapped!</p>
      }
      <div class="close-button" [mat-dialog-close]="true">
        <span class="material-symbols-outlined"> cancel </span>
      </div>
    </div>
  `,
  imports: [CommonModule, MatProgressSpinnerModule, MatDialogModule],
  styleUrls: ["./loading-spinner.scss"],
  standalone: true,
})
export class LoadingDialogComponent implements OnInit {
  tokenSwapped = false;
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.tokenSwapped = true;
    }, 5000);
  }
}
