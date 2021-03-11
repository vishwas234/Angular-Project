import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlandbyfarmerComponent } from './viewlandbyfarmer.component';

describe('ViewlandbyfarmerComponent', () => {
  let component: ViewlandbyfarmerComponent;
  let fixture: ComponentFixture<ViewlandbyfarmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlandbyfarmerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlandbyfarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
