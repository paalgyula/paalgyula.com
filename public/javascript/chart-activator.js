const elements = document.querySelectorAll('.chart');

[].forEach.call(elements, (element) => {
  new EasyPieChart(element, {
    // your options goes here
    barColor: '#566f7c',
    scaleColor: false,
    lineWidth: 10,
    lineCap: 'circle'
  });
});
