import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestraOfertaComponent } from './nuestra-oferta.component';

describe('NuestraOfertaComponent', () => {
  let component: NuestraOfertaComponent;
  let fixture: ComponentFixture<NuestraOfertaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NuestraOfertaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuestraOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
