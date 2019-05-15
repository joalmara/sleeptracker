import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPage } from './visual.page';

describe('VisualPage', () => {
  let component: VisualPage;
  let fixture: ComponentFixture<VisualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
