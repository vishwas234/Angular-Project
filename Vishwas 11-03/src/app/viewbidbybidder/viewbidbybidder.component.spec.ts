import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewbidbybidderComponent } from './viewbidbybidder.component';

describe('ViewbidbybidderComponent', () => {
  let component: ViewbidbybidderComponent;
  let fixture: ComponentFixture<ViewbidbybidderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewbidbybidderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewbidbybidderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
