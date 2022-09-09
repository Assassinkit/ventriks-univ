import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllUniversitiesComponent } from './all-universities.component';

describe('AllUniversitiesComponent', () => {
  let component: AllUniversitiesComponent;
  let fixture: ComponentFixture<AllUniversitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllUniversitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllUniversitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
