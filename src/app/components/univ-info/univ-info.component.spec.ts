import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivInfoComponent } from './univ-info.component';

describe('UnivInfoComponent', () => {
  let component: UnivInfoComponent;
  let fixture: ComponentFixture<UnivInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnivInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnivInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
