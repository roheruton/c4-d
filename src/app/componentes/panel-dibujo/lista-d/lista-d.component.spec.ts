import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDComponent } from './lista-d.component';

describe('ListaDComponent', () => {
  let component: ListaDComponent;
  let fixture: ComponentFixture<ListaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
