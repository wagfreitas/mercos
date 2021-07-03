import { Component } from '@angular/core';
import { Settings, AppSettings } from './app.settings';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public settings?: Settings;

  constructor(public appSettings: AppSettings){
    this.settings = this.appSettings.settings;
  }
  title = 'Ecommerce';

}
