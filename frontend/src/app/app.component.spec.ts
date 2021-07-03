import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppSettings } from './app.settings';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [ AppSettings ],
    }).compileComponents();
  });


  it('should have router-outlet', () => {
    const fixture = TestBed.createComponent(AppComponent);

    expect(fixture.nativeElement.querySelector('router-outlet')).not.toBeNull();
});



});
