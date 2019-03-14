import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuPage } from './sub-menu.page';

describe('SubMenuPage', () => {
  let component: SubMenuPage;
  let fixture: ComponentFixture<SubMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
