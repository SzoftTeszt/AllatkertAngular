import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjAllatComponent } from './uj-allat.component';

describe('UjAllatComponent', () => {
  let component: UjAllatComponent;
  let fixture: ComponentFixture<UjAllatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UjAllatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UjAllatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
