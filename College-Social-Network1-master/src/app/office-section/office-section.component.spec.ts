import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeSectionComponent } from './office-section.component';

describe('OfficeSectionComponent', () => {
  let component: OfficeSectionComponent;
  let fixture: ComponentFixture<OfficeSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfficeSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfficeSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
