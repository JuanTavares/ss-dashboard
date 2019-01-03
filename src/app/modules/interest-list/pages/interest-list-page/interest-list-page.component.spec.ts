import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestListPageComponent } from './interest-list-page.component';

describe('InterestListPageComponent', () => {
  let component: InterestListPageComponent;
  let fixture: ComponentFixture<InterestListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
