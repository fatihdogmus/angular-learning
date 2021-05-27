import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: AppComponent },
  {
    path: "registration",
    loadChildren: () => import("../registration/registration.module").then((module) => module.RegistrationModule),
  },
  { path: "**", component: PageNotFoundComponent, loadChildren: "" },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent],
})
export class RoutingModule {}
