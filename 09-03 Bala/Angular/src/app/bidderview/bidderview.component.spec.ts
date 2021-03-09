import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderviewComponent } from './bidderview.component';

describe('BidderviewComponent', () => {
  let component: BidderviewComponent;
  let fixture: ComponentFixture<BidderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
