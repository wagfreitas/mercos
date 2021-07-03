import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-horizontal-menu',
  templateUrl: './horizontal-menu.component.html',
  styleUrls: ['./horizontal-menu.component.scss'],
  providers:[MenuService]
})
export class HorizontalMenuComponent implements OnInit {
  @Input('menuParentId') menuParentId: any;
  public menuItems?: Array<any>;


  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getHorizontalMenuItem();
    this.menuItems = this.menuItems.filter(item => item.parentId === this.menuParentId);
    //console.log(this.menuItems)
  }

}
