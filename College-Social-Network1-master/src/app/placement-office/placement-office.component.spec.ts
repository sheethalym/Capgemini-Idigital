import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementOfficeComponent } from './placement-office.component';

describe('PlacementOfficeComponent', () => {
  let component: PlacementOfficeComponent;
  let fixture: ComponentFixture<PlacementOfficeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementOfficeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementOfficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
