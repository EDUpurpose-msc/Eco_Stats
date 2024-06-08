var ctx2 = document.getElementById('doughnut2').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Boac', 'Gasan', 'Mogpog', 'Torrijos', 'Buenavista'],

        datasets: [{
            label: 'Percentage of Total Agricultural Patents Issued by Municipality: 2010-2022',
            data: [43.01,1.59,13.27,12.20,8.68,21.25],
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