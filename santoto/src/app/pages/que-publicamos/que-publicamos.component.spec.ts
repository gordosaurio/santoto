import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuePublicamosComponent } from './que-publicamos.component';

describe('QuePublicamosComponent', () => {
  let component: QuePublicamosComponent;
  let fixture: ComponentFixture<QuePublicamosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuePublicamosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuePublicamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
