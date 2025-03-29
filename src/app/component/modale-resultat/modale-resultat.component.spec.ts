import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModaleResultatComponent } from './modale-resultat.component';

describe('ModaleResultatComponent', () => {
  let component: ModaleResultatComponent;
  let fixture: ComponentFixture<ModaleResultatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModaleResultatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModaleResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
