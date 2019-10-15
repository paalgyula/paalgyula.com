import { Component } from '@angular/core';
import { TimelineItem } from './timeline-item/timeline-item';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'app';
    timeline: TimelineItem[] = [];

    constructor(
        private _metaService: Meta,
        private _titleService: Title,
        private _http: HttpClient
    ) { }

    ngOnInit(): void {
        this._http.get<TimelineItem[]>('/assets/experiences.json')
            .subscribe((value: TimelineItem[]) => this.timeline = value);
    }

    ngAfterViewInit(): void {
        this._titleService.setTitle('Paál Gyula - Senior Java Developer');
        this._metaService.addTag({ name: 'twitter:title', content: 'Gyula, Paal - Senior Developer' });
        this._metaService.addTag({
            name: 'description',
            content: 'Senior Java, J2EE (Wildfly), SpringBoot developer with more than 10 years relevant experience!'
        });

        /* ======= Chart ========= */
        $('.chart').easyPieChart({
            barColor: '#00BCD4',    // Pie chart color
            trackColor: '#e8e8e8',
            scaleColor: false,
            lineWidth: 5,
            animate: 2000,
            onStep: function (_from: any, _to: any, percent: number) {
                $(this.el).find('span').text(Math.round(percent));
            }
        });

        /* ========= ScrollTo ========== */
        $('.scrollto').on('click', function (e: any) {
            // store hash
            const target = this.hash;
            e.preventDefault();

            $([document.documentElement, document.body]).animate({
                scrollTop: $(target).offset().top - 70
            }, 800);
        });

        /* ======= Fixed page nav when scrolled ======= */
        $(window).on('scroll resize load', function() {
            $('#page-nav-wrapper').removeClass('fixed');

            const scrollTop = $(this).scrollTop();
            const topDistance = $('#page-nav-wrapper').offset().top;

            if ((topDistance) > scrollTop) {
                $('#page-nav-wrapper').removeClass('fixed');
                $('body').removeClass('sticky-page-nav');
            } else {
                $('#page-nav-wrapper').addClass('fixed');
                $('body').addClass('sticky-page-nav');
            }
        });
    }
}
