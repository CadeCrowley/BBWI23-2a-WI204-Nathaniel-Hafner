// FILE: create-update.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { CreateUpdateComponent } from './create-update.component';

describe('CreateUpdateComponent', () => {
  let component: CreateUpdateComponent;
  let fixture: ComponentFixture<CreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render form elements', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Neuer Lebenslauf');
    expect(compiled.querySelector('label[for="title"]').textContent).toContain('Jobtitel:');
    expect(compiled.querySelector('input#title')).toBeTruthy();
    expect(compiled.querySelector('label[for="company"]').textContent).toContain('Firma:');
    expect(compiled.querySelector('input#company')).toBeTruthy();
    expect(compiled.querySelector('label[for="date"]').textContent).toContain('Zeitraum:');
    expect(compiled.querySelector('input#date')).toBeTruthy();
    expect(compiled.querySelector('button[type="submit"]').textContent).toContain('Speichern');
  });

  it('should bind input values to cvData model', () => {
    const titleInput = fixture.debugElement.query(By.css('input#title')).nativeElement;
    const companyInput = fixture.debugElement.query(By.css('input#company')).nativeElement;
    const dateInput = fixture.debugElement.query(By.css('input#date')).nativeElement;

    titleInput.value = 'Software Engineer';
    titleInput.dispatchEvent(new Event('input'));
    companyInput.value = 'Tech Company';
    companyInput.dispatchEvent(new Event('input'));
    dateInput.value = '2021-2023';
    dateInput.dispatchEvent(new Event('input'));

    expect(component.cvData.title).toBe('Software Engineer');
    expect(component.cvData.company).toBe('Tech Company');
    expect(component.cvData.date).toBe('2021-2023');
  });

  it('should call submitForm on form submit', () => {
    spyOn(component, 'submitForm');
    const form = fixture.debugElement.query(By.css('form')).nativeElement;
    form.dispatchEvent(new Event('submit'));
    expect(component.submitForm).toHaveBeenCalled();
  });
});