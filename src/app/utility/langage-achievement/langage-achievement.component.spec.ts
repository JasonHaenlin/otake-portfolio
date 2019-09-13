import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangageAchievementComponent } from './langage-achievement.component';

describe('LangageAchievementComponent', () => {
  let component: LangageAchievementComponent;
  let fixture: ComponentFixture<LangageAchievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangageAchievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangageAchievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
