import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncontremonosComponent } from './encontremonos.component';

describe('EncontremonosComponent', () => {
  let component: EncontremonosComponent;
  let fixture: ComponentFixture<EncontremonosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncontremonosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncontremonosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
