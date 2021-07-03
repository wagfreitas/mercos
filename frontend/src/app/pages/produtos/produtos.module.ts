import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProdutosComponent } from './produtos.component';


export const routes = [
  {path: '', component: ProdutosComponent, patchMatch: 'full'}
];
@NgModule({
  declarations: [
    ProdutosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,

  ]
})
export class ProdutosModule { }
