import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowBallComponent } from './shadow-ball.component';

describe('ShadowBallComponent', () => {
  let component: ShadowBallComponent;
  let fixture: ComponentFixture<ShadowBallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadowBallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
