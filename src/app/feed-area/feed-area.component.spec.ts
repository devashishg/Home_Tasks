import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedAreaComponent } from './feed-area.component';

describe('FeedAreaComponent', () => {
  let component: FeedAreaComponent;
  let fixture: ComponentFixture<FeedAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
