import { Injectable, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";
import { FormsModule } from "@angular/forms";
import { RoutingModule } from "./routing/routing.module";
import { RegistrationModule } from "./registration/registration.module";
import { MediatorParentComponent } from "./mediator/mediator-parent/mediator-parent.component";
import { ChildAComponent } from "./mediator/mediator-parent/child-a/child-a.component";
import { ChildBComponent } from "./mediator/mediator-parent/child-b/child-b.component";
import { SecondComponent } from "./mediator/service-mediator/second/second.component";
import { FirstComponent } from "./mediator/service-mediator/first/first.component";
import { StoreModule } from "@ngrx/store";
import { CounterModule } from "./rtk/counter/counter.module";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "../environments/environment";
import { FormModule } from "./form/form.module";

@Injectable({ providedIn: "root" })
@NgModule({
  declarations: [
    TestComponent,
    AppComponent,
    MediatorParentComponent,
    ChildAComponent,
    ChildBComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RegistrationModule,
    StoreModule.forRoot({}, {}),
    CounterModule,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
