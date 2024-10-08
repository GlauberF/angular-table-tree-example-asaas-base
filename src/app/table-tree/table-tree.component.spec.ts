import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTreeComponent } from './table-tree.component';

describe('TableTreeComponent', () => {
  let component: TableTreeComponent;
  let fixture: ComponentFixture<TableTreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableTreeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
