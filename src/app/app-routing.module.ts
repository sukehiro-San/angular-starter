import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TestComponent } from "./test.component";
import { HomeComponent } from "./home.component";
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
    { path: "test", component: TestComponent, pathMatch: "full" },
    { path: "home", component: HomeComponent, pathMatch: "full", canActivate: [AuthGuard] },
    { path: "", redirectTo: "test", pathMatch: "full" },
    // { path: "", redirectTo: "home"},

]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }