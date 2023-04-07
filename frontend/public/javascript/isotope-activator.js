var grid = document.querySelector('.isotope');

var iso = new Isotope(grid, {
  // options...
  itemSelector: '.item',
  layoutMode: 'fitRows',
  masonry: {
    columnWidth: 200
  }
});

document.querySelectorAll('.portfolio-section li').forEach(el => {
  el.addEventListener('click', e => {
    const filterValue = el.getAttribute('data-filter')
    iso.arrange({ filter: filterValue });

    document.querySelectorAll('.portfolio-section li').forEach(el2 => {
      if (el == el2) {
        el2.classList = "type active"
      } else {
        el2.classList = 'type'
      }
    })
  })
})
