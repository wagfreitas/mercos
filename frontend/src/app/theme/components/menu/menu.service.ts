import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import { Menu } from './menu.model';
import { horizotalMenuItems } from './menu';
import {verticalMenuItems} from './menu';

@Injectable()

export class MenuService {

  constructor(private location: Location,
              private router: Router) { }

  public getHorizontalMenuItem(): Array<Menu>{
     return horizotalMenuItems
  }

  public getVerticalMenuItem(): Array<Menu>{
    return verticalMenuItems
  }

  //toggle(alternancia) abre e fecha o menu
  public toggleMenuItem(menuId: string){
    let menuItem = document.getElementById('menu-item'+menuId);
    let subMenu = document.getElementById('sub-menu'+menuId);
    if(subMenu){
      if(subMenu.classList.contains('show')){
        subMenu.classList.remove('show');
        menuItem?.classList.remove('expanded')
      }
      else{
        subMenu.classList.add('show');
        subMenu.classList.add('expanded');
      }
    }
  }

  public fechaOutrosSubMenus(menu:Array<Menu>, menuId: any){
    let currentMenuItem = menu.filter(item => item.id == menuId)[0];
    menu.forEach(item => {
      if((item.id != menuId && item.parentId == currentMenuItem.parentId) || (currentMenuItem.parentId == 0 && item.id != menuId) ){
        let subMenu = document.getElementById('sub-menu-'+item.id);
        let menuItem = document.getElementById('menu-item-'+item.id);
        if(subMenu){
          if(subMenu.classList.contains('show')){
            subMenu.classList.remove('show');
            menuItem?.classList.remove('expanded');
          }
        }
      }
    });
  }
}
