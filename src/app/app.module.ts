import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { CustomersModule } from './customers/customers.module'
import { UsersModule } from './users/users.module'

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CustomersModule,
    UsersModule,
    SharedModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
