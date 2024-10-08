import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { TestComponent } from "./test.component";
import { myDirectiveDirective } from "./myDirective.directive";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./home.component";
import { CommonModule } from "@angular/common";
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from "@angular/router";
import { FormsModule } from "@angular/forms";
import { AppService } from "./app.service";
import { AuthGuard } from "./auth.guard";
import {
  HTTP_INTERCEPTORS,
  provideHttpClient,
  withInterceptors,
} from "@angular/common/http";
import { authInterceptor } from "./auth-interceptor.interceptor";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PreviewExchangeDialogComponent } from "./preview-exchange-dialog.component";
import { TokenExchangeDialog } from "./token-exchange-dialog";
// import { routes } from "./app-routing.module";

@NgModule({
  imports: [CommonModule, BrowserModule, AppRoutingModule, FormsModule],
  declarations: [
    AppComponent,
    TestComponent,
    myDirectiveDirective,
    HomeComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    AppService,
    AuthGuard,
    provideHttpClient(withInterceptors([authInterceptor])),
    provideAnimationsAsync(),
  ],
})
export class AppModule {}
