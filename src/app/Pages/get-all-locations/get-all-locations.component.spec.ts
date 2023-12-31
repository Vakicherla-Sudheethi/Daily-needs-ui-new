import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLocationsComponent } from './get-all-locations.component';

describe('GetAllLocationsComponent', () => {
  let component: GetAllLocationsComponent;
  let fixture: ComponentFixture<GetAllLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllLocationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetAllLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
