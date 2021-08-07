import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NovaTransfenciaComponent } from './nova-transferencia/nova-transferencia.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, NovaTransfenciaComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
