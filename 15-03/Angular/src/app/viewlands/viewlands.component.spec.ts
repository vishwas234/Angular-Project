import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewlandsComponent } from './viewlands.component';

describe('ViewlandsComponent', () => {
  let component: ViewlandsComponent;
  let fixture: ComponentFixture<ViewlandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewlandsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewlandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
