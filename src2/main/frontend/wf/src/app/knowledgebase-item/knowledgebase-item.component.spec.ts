import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowledgebaseItemComponent } from './knowledgebase-item.component';

describe('KnowledgebaseItemComponent', () => {
  let component: KnowledgebaseItemComponent;
  let fixture: ComponentFixture<KnowledgebaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowledgebaseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowledgebaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
