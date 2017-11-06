import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TimelineItemComponent } from './timeline-item/timeline-item.component';
import { EducationItemComponent } from './education-item/education-item.component';
import { KnowledgebaseItemComponent } from './knowledgebase-item/knowledgebase-item.component';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { ContactBoxComponent } from './contact-box/contact-box.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimelineItemComponent,
    EducationItemComponent,
    KnowledgebaseItemComponent,
    PortfolioItemComponent,
    ContactBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
