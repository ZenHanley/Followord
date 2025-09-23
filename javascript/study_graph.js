const ctx = document.getElementById('pie_chart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data: {
    labels: ['Reading', 'Writing', 'Watching', 'Grammer', 'Vocab', 'Speaking'],
    datasets: [{
        label: 'Hours Spent',
        data: [1, 4, 3, 5, 2, 3],
        backgroundColor: [
        '#C99191',
        '#D06C6C',
        '#D08E8E',
        '#EB9090',
        '#F9B7B7',
        '#9b7c7cff'
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