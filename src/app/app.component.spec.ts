import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimelineItem } from './timeline-item/timeline-item';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { EducationItemComponent } from './education-item/education-item.component';
import { KnowledgebaseItemComponent } from './knowledgebase-item/knowledgebase-item.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { ContactBoxComponent } from './contact-box/contact-box.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [
        AppComponent,
        HeaderComponent,
        TimelineItemComponent,
        EducationItemComponent,
        KnowledgebaseItemComponent,
        PortfolioItemComponent,
        ContactBoxComponent
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
