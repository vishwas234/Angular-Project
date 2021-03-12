import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddlandComponent } from './addland.component';

describe('AddlandComponent', () => {
  let component: AddlandComponent;
  let fixture: ComponentFixture<AddlandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddlandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddlandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
