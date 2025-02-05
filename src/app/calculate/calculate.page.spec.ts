import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalculatePage } from './calculate.page';

describe('CalculatePage', () => {
  let component: CalculatePage;
  let fixture: ComponentFixture<CalculatePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
