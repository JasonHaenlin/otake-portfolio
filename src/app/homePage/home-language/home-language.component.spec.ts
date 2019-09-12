import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLanguageComponent } from './home-language.component';

describe('HomeLanguageComponent', () => {
  let component: HomeLanguageComponent;
  let fixture: ComponentFixture<HomeLanguageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLanguageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
