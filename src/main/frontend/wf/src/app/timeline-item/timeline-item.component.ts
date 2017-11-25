import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { TimelineItem } from './timeline-item';

@Component({
    selector: 'app-timeline-item',
    templateUrl: './timeline-item.component.html'
})
export class TimelineItemComponent implements OnInit {

    @Input()
    public item: TimelineItem;

    constructor() { }

    ngOnInit() {
    }

}
