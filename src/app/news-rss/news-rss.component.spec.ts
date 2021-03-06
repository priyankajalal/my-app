import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsRssComponent } from './news-rss.component';

describe('NewsRssComponent', () => {
  let component: NewsRssComponent;
  let fixture: ComponentFixture<NewsRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
