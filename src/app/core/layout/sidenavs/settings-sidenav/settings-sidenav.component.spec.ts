import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsSidenavComponent } from './settings-sidenav.component';

describe('SettingsSidenavComponent', () => {
  let component: SettingsSidenavComponent;
  let fixture: ComponentFixture<SettingsSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
