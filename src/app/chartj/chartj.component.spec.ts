import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartjComponent } from './chartj.component';

describe('ChartjComponent', () => {
  let component: ChartjComponent;
  let fixture: ComponentFixture<ChartjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
