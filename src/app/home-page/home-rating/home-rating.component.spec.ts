import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeRatingComponent } from './home-rating.component';

describe('HomeRatingComponent', () => {
  let component: HomeRatingComponent;
  let fixture: ComponentFixture<HomeRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
