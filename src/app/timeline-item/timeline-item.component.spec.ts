import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineItemComponent } from './timeline-item.component';
import { TimelineItem } from './timeline-item';
import { DebugElement } from '@angular/core';

describe('TimelineItemComponent', () => {
  let component: TimelineItemComponent;
  let fixture: ComponentFixture<TimelineItemComponent>;

  let item: TimelineItem;

  beforeAll(() => {
    item = {
      meta: {
        title: 'trallala',
        time: '2009',
        description: 'Test description',
        tasks: ['task1', 'task2'],
        technologies: []
      },
      workplace: {
        image: 'dummy-image.png',
        location: {
          title: 'dummy-location',
          href: 'https://maps.google.com'
        },
        title: 'dummy title'
      }
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimelineItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineItemComponent);
    component = fixture.componentInstance;
    component.item = item;
    fixture.detectChanges();
  });

  it('should create a component', () => {
    expect(component).toBeTruthy();
  });

  describe('rendered template', () => {
    let debugElement: DebugElement;
    let nativeElement: HTMLElement;
    beforeAll(() => {
      debugElement = fixture.debugElement;
      nativeElement = debugElement.nativeElement;
    });

    it('should contain a dummy title', () => {
      const p = nativeElement.querySelector('div > div > h3');
      expect(p.textContent.trim()).toEqual('dummy title');
    });

    it('should contain a description', () => {
      const p = nativeElement.querySelector('div > div.job-desc > p');
      expect(p.textContent.trim()).toEqual('Test description');
    });

    it('should contain 2 test tasks', () => {
      const p = nativeElement.querySelector('div > div.job-desc > ul');
      expect(p.childElementCount).toBe(2);
    });

    it('should image url be "assets/images/dummy-image.png"', () => {
      const p = nativeElement.querySelector('div > div > h3 > img');
      expect(p.attributes.getNamedItem('src').value).toEqual(
        'assets/images/dummy-image.png'
      );
    });
  });
});
