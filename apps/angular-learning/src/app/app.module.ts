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
import { FormModule } from "./form/form.module";
import { ErrorTailorModule } from "@ngneat/error-tailor";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpModule } from "./http/http.module";
import { NgrxModule } from "./ngrx/ngrx.module";
import { counterReducer } from "./ngrx/store/slices/counter/counter.reducer";
import { environment } from "../environments/environment";

@Injectable({ providedIn: "root" })
@NgModule({
  declarations: [
    TestComponent,
    AppComponent,
    MediatorParentComponent,
    ChildAComponent,
    ChildBComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    RegistrationModule,
    // CounterModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    FormModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: "Bu alan gerekli",
          minlength: ({
                        requiredLength,
                        actualLength
                      }: { requiredLength: number, actualLength: number }) => `Expect ${requiredLength} but got ${actualLength}`,
          invalidAddress: () => `Address isn't valid`
        }
      }
    }),
    BrowserAnimationsModule,
    HttpModule,
    NgrxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
