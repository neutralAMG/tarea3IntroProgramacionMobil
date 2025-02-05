import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumToLetterTraductorPage } from './num-to-letter-traductor.page';

describe('NumToLetterTraductorPage', () => {
  let component: NumToLetterTraductorPage;
  let fixture: ComponentFixture<NumToLetterTraductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NumToLetterTraductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
