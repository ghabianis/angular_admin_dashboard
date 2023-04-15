import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDevextremeComponent } from './table-devextreme.component';

describe('TableDevextremeComponent', () => {
  let component: TableDevextremeComponent;
  let fixture: ComponentFixture<TableDevextremeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableDevextremeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableDevextremeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
