import { Component, Input, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menu } from '../menu.model';

@Component({
  selector: 'app-vertical-menu',
  templateUrl: './vertical-menu.component.html',
  styleUrls: ['./vertical-menu.component.scss'],
  providers:[MenuService]

})
export class VerticalMenuComponent implements OnInit {

  @Input('menuParentId') menuParentId: any;
  public menuItems: Array<Menu> = [];

  constructor(public menuService: MenuService) { }

  ngOnInit(): void {
    this.menuItems = this.menuService.getVerticalMenuItem();
    this.menuItems = this.menuItems.filter(item => item.parentId === this.menuParentId)
   }

   onClick(menuId: any){
     console.log(menuId)
     this.menuService.toggleMenuItem(menuId);
     this.menuService.fechaOutrosSubMenus(this.menuService.getVerticalMenuItem(), menuId)
   }

}
