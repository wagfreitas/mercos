import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { RegistrarComponent } from './registrar.component';

export const routes = [
  { path: '', component: RegistrarComponent, pathMatch: 'full'  }
];

@NgModule({
  declarations: [
    RegistrarComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class RegistrarModule { }
