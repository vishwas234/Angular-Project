import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidderheaderComponent } from './bidderheader.component';

describe('BidderheaderComponent', () => {
  let component: BidderheaderComponent;
  let fixture: ComponentFixture<BidderheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BidderheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BidderheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
