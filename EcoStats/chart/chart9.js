var ctx2 = document.getElementById('doughnut-chart4').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Boac', 'Gasan', 'Mogpog', 'Torrijos', 'Buenavista','Sta Cruz'],

        datasets: [{
            label: 'Percentage of Total Number of Barangays Within Forestland by Municipality',
            data: [15.09,1.89,15.09,18.87,11.32,37.74, ],
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

