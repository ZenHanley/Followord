const ctx = document.getElementById('pie_chart').getContext('2d');

new Chart(ctx, {
    type: 'pie',
    data: {
    labels: ['Reading', 'Writing', 'Watching', 'Grammer', 'Vocab', 'Speaking'],
    datasets: [{
        label: 'Hours Spent',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)'
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