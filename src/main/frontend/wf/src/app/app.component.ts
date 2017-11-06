import { Component } from '@angular/core';
import { TimelineItem } from './timeline-item/timeline-item';
import { OnInit } from '@angular/core';
import { AfterViewInit } from '@angular/core/src/metadata/lifecycle_hooks';

declare const $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    title = 'app';
    timeline: TimelineItem[];

    ngOnInit(): void {
        const timelineItem: TimelineItem = {
            workplace: {
                image: '',
                location: {
                    href: '#',
                    title: 'Budapest'
                },
                title: 'Izebize company'
            },
            meta: {
                name: 'nemtom',
                title: 'Ezt sem',
                description: 'Jofele'
            }
        };

        this.timeline = [];
        this.timeline.push(timelineItem);
        this.timeline.push(timelineItem);
        this.timeline.push(timelineItem);
    }

    ngAfterViewInit(): void {
        /* ======= Isotope plugin ======= */
        /* Ref: http://isotope.metafizzy.co/ */
        // init Isotope
        const $container = $('.isotope');

        // $container.imagesLoaded(function () {
        $('.isotope').isotope({
            itemSelector: '.item'
        });
        // });

        // filter items on click
        $('#filters').on('click', '.type', function () {
            const filterValue = $(this).attr('data-filter');
            $container.isotope({ filter: filterValue });
        });

        // change is-checked class on buttons
        $('.filters').each(function (i, typeGroup) {
            const $typeGroup = $(typeGroup);
            $typeGroup.on('click', '.type', function () {
                $typeGroup.find('.active').removeClass('active');
                $(this).addClass('active');
            });
        });

        /* ======= Chart ========= */
        $('.chart').easyPieChart({
            barColor: '#00BCD4',    // Pie chart color
            trackColor: '#e8e8e8',
            scaleColor: false,
            lineWidth: 5,
            animate: 2000,
            onStep: function (from, to, percent) {
                $(this.el).find('span').text(Math.round(percent));
            }
        });

        /* ========= ScrollTo ========== */
        $('.scrollto').on('click', function(e) {
            // store hash
            const target = this.hash;
            e.preventDefault();

            $('body').scrollTo(target, 800, { offset: -60, 'axis': 'y' });
        });

        /* ======= Fixed page nav when scrolled ======= */
        $(window).on('scroll resize load', function () {

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
