import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimeSheetComponent } from './work-time-sheet.component';

describe('WorkTimeSheetComponent', () => {
  let component: WorkTimeSheetComponent;
  let fixture: ComponentFixture<WorkTimeSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkTimeSheetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
