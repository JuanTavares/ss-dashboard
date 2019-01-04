import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEditPageComponent } from './content-edit-page.component';

describe('ContentEditPageComponent', () => {
  let component: ContentEditPageComponent;
  let fixture: ComponentFixture<ContentEditPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentEditPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
