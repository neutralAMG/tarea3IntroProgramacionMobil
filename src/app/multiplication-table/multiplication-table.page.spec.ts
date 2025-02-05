import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultiplicationTablePage } from './multiplication-table.page';

describe('MultiplicationTablePage', () => {
  let component: MultiplicationTablePage;
  let fixture: ComponentFixture<MultiplicationTablePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplicationTablePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
