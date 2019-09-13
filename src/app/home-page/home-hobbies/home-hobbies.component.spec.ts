import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHobbiesComponent } from './home-hobbies.component';

describe('HomeHobbiesComponent', () => {
  let component: HomeHobbiesComponent;
  let fixture: ComponentFixture<HomeHobbiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeHobbiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeHobbiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
