import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomDivComponent } from './random-div.component';

describe('RandomDivComponent', () => {
  let component: RandomDivComponent;
  let fixture: ComponentFixture<RandomDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RandomDivComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RandomDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
