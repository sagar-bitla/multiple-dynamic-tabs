import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleSelectionTabComponent } from './multiple-selection-tab.component';

describe('MultipleSelectionTabComponent', () => {
  let component: MultipleSelectionTabComponent;
  let fixture: ComponentFixture<MultipleSelectionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleSelectionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleSelectionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
