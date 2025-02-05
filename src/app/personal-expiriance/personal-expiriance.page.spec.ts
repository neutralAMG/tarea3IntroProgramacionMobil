import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PersonalExpiriancePage } from './personal-expiriance.page';

describe('PersonalExpiriancePage', () => {
  let component: PersonalExpiriancePage;
  let fixture: ComponentFixture<PersonalExpiriancePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalExpiriancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
