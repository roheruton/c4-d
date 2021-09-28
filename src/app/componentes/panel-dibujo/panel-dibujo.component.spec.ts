import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDibujoComponent } from './panel-dibujo.component';

describe('PanelDibujoComponent', () => {
  let component: PanelDibujoComponent;
  let fixture: ComponentFixture<PanelDibujoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PanelDibujoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDibujoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
