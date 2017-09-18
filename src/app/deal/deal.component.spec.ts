import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealComponent } from './deal.component';

describe('CreditsComponent', () => {
  let component: DealComponent;
  let fixture: ComponentFixture<DealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
