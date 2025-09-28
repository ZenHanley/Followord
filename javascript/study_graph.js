const ctx = document.getElementById('pie_chart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data: {
    labels: ['Reading', 'Writing', 'Watching', 'Grammer', 'Vocab', 'Speaking'],
    datasets: [{
        label: 'Hours Spent',
        data: [1, 4, 3, 5, 2, 3],
        backgroundColor: [
        '#aa8888ff',
        '#D06C6C',
        '#a76c6cff',
        '#EB9090',
        '#F9B7B7',
        '#9c5353ff'
        ]
    }]
    },
    options: {
    responsive: true,
    plugins: {
        legend: {
        position: 'bottom'
            }
        }
    }
});