import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { BrowserModule } from '../../node_modules/@angular/platform-browser';
import { RouterModule } from '../../node_modules/@angular/router';
import { APP_BASE_HREF } from '../../node_modules/@angular/common';
import { by } from '../../node_modules/protractor';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        DummyComponent
      ],
      imports: [
        BrowserModule,
        RouterModule.forRoot([]),
      ],
      providers:[
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title "Test Project"`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Test Project');
  }));
  it('should have as title in a h1 tag "Welcome to Test Project!"', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to Test Project!');
  }));

  it('should increase by 1 if button clicked', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    let dummuClickButton = fixture.debugElement.nativeElement.querySelector('#dummyClickButton');
    expect(fixture.componentInstance.points).toBe(0);
    dummuClickButton.click();
    expect(fixture.componentInstance.points).toBe(1);
  }));

});
