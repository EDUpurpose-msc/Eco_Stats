
var ctx3 = document.getElementById('lineChart1').getContext('2d');
var myLineChart = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['Boac', 'Gasan', 'Mogpog', 'Torrijos', 'Buenavista','Santa Cruz'],
        datasets: [{
            label: 'Number of patents issued',
            data: [917,185,260,283,34,453],
            backgroundColor: [
                'rgba(6,98,59)'

            ],
            borderColor: 'rgb(100,157,102)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                beginAtZero: true
            },
            y: {
                beginAtZero: true
            }
        }
    }
});