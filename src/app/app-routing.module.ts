import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ChartComponent } from './chart/chart.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { PtableComponent } from './ptable/ptable.component';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'form-path', component: FormComponent },
      { path: 'chart-path', component: ChartComponent },
      { path: 'fileupload-path', component: FileuploadComponent },
      { path: 'table-path', component: PtableComponent },
      { path: '', redirectTo: '/chart-path', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
