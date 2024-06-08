var ctx2 = document.getElementById('doughnut').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Boac', 'Gasan', 'Mogpog', 'Torrijos', 'Buenavista'],

        datasets: [{
            label: 'Percentage of Total Residential Patents Issued by Municipality: 2011-2022',
            data: [55.08, 8.82, 12.60, 8.45, 10.27, 4.78],
            backgroundColor: [
                'rgba(243,168,41)',
                'rgba(223,41,54)',
                'rgba(118,58,118)',
                'rgba(32,142,196)',
                'rgba(255,241,241)'

            ],
            borderColor: [
                'rgba(243,168,41)',
                'rgba(223,41,54)',
                'rgba(118,58,118)',
                'rgba(32,142,196)',
                'rgba(255,241,241)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});

