import { Component, OnInit, AfterViewInit } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.css']
})
export class PortfolioItemComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
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
  }

}
