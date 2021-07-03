import { isPlatformBrowser } from '@angular/common';
import { Component, OnInit, ViewChild, HostListener, Inject, PLATFORM_ID  } from '@angular/core';
import { Router } from '@angular/router';
import { Settings, AppSettings } from '../app.settings';
import { AppService } from '../app.service';
import { AuthService} from '../shared/services/auth.service';
import { TokenStorageService } from '../shared/services/token-storage.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {
  @ViewChild('sidenav') sidenav:any;
  public toolbarTypes = [1, 2];
  public toolbarTypeOption!: number;
  public headerTypes = ['default', 'image', 'carousel', 'map', 'video'];
  public headerTypeOption!: string;
  public searchPanelVariants = [1, 2, 3];
  public searchPanelVariantOption!: number;
  public headerFixed: boolean = false;
  public showBackToTop: boolean = false;
  public scrolledCount = 0;
  public settings: Settings;
  public isLoggedIn = false;
  public usuario: [];

  constructor(public appSettings:AppSettings,
              public router:Router,
              public appService:AppService,
              public authService: AuthService,
              public tokenStorage: TokenStorageService,
              @Inject(PLATFORM_ID) private platformId: Object) {
    this.settings = this.appSettings.settings;
  }

  ngOnInit() {
    this.toolbarTypeOption = this.settings.toolbar;
    this.headerTypeOption = this.settings.header;
    this.searchPanelVariantOption = this.settings.searchPanelVariant;

    this.isLoggedIn = !!this.tokenStorage.getToken();
    if(this.isLoggedIn){
      const user = this.tokenStorage.getUser();
      this.usuario = user.user;
      console.log(this.usuario);
      this.router.navigate(['/produtos'])
    }


  }


  public chooseToolbarType(){
    this.settings.toolbar = this.toolbarTypeOption;
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0,0);
    }
  }

  public chooseHeaderType(){
    this.settings.header = this.headerTypeOption;
    if (isPlatformBrowser(this.platformId)) {
      window.scrollTo(0,0);
    }
    this.router.navigate(['/']);
  }

  public chooseSearchPanelVariant(){
    this.settings.searchPanelVariant = this.searchPanelVariantOption;
  }

  public exportaProd(val){
    this.appService.getVendas().subscribe(data =>{
      data.forEach(item =>{
        this.appService.exportVendas(item).subscribe(res =>{
          console.log(res)
        })
      })

    })

  }


  @HostListener('window:scroll') onWindowScroll() {
    const scrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
    (scrollTop > 300) ? this.showBackToTop = true : this.showBackToTop = false;

    if(this.settings.stickyMenuToolbar){
      let top_toolbar = document.getElementById('top-toolbar');
      if(top_toolbar){
        if(scrollTop >= top_toolbar.clientHeight) {
          this.settings.mainToolbarFixed = true;
        }
        else{
          this.settings.mainToolbarFixed = false;
        }
      }
    }


    let load_more = document.getElementById('load-more');
    if(load_more){
      if(window.innerHeight > load_more.getBoundingClientRect().top + 120){
        if(!this.settings.loadMore.complete){
          if(this.settings.loadMore.start){
            if(this.scrolledCount < this.settings.loadMore.step){
              this.scrolledCount++;
              if(!this.settings.loadMore.load){
                this.settings.loadMore.load = true;
              }
            }
            else{
              this.settings.loadMore.start = false;
              this.scrolledCount = 0;
            }
          }
        }
      }
    }
  }

  public scrollToTop(){
    var scrollDuration = 200;
    var scrollStep = -window.pageYOffset  / (scrollDuration / 20);
    var scrollInterval = setInterval(()=>{
      if(window.pageYOffset != 0){
         window.scrollBy(0, scrollStep);
      }
      else{
        clearInterval(scrollInterval);
      }
    },10);
    if(window.innerWidth <= 768){
      setTimeout(() => {
        if (isPlatformBrowser(this.platformId)) {
          window.scrollTo(0,0);
        }
      });
    }
  }




}
