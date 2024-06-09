import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRidesComponent } from './all-rides.component';

describe('AllRidesComponent', () => {
  let component: AllRidesComponent;
  let fixture: ComponentFixture<AllRidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllRidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllRidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
