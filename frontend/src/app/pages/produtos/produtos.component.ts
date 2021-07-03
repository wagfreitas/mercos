import { Component, OnInit, ViewChild } from '@angular/core';
import { Settings, AppSettings } from '../../app.settings';
import { AppService } from '../../app.service';
import { Router } from '@angular/router';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Vendas } from 'src/app/app.models';
import { MessageService } from 'src/app/shared/utils/message.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {
  displayedColumns: string[] = [
    'parentid',
    'productid',
    'qty',
    'sku'
  ];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  dataSource: MatTableDataSource<Vendas>;
  public psConfig: PerfectScrollbarConfigInterface = {
    wheelPropagation: true,
  };
  public message: string;
  public removedSearchField: string;
  public slides = [];
  public vendas: Vendas[];
  public searchFields: any;
  public prinProdutos: any;

  public settings: Settings;
  constructor(
    public router: Router,
    public appSettings: AppSettings,
    public appService: AppService,
    public messageService: MessageService
  ) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {

  }

  public removeSearchField(field) {
    this.message = null;
    this.removedSearchField = field;
  }

  public searchClicked(event) {
    console.log('evento', event);
    this.prinProdutos = event;
    this.dataSource = new MatTableDataSource<Vendas>(this.prinProdutos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
