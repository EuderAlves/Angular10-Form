import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Routes } from '@angular/router';
import { ExtratComponent } from './extrat/extrat.component';
import { NovaTransfenciaComponent } from './nova-transferencia/nova-transferencia.component';

export const routes: Routes = [
  { path: '', redirectTo: 'extrato', pathMatch: 'full' },
  { path: 'extrato', component: ExtratComponent },
  { path: 'nova-transferencia', component: NovaTransfenciaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRountingModule {}
