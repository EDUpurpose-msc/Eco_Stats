var ctx2 = document.getElementById('doughnut3').getContext('2d');
var myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Male','Female'],

        datasets: [{
            label: 'Percentage Total of Special Patents Issued for Schools by Municipality and Sex: 2015-2022',
            data: [55.56, 44.44],
            backgroundColor: [
                'rgba(32,142,196)',
                'rgba(255, 99, 132, 0.5)'

            ],
            borderColor: [
                'rgba(32,142,196)',
                'rgba(255, 99, 132, 0.5)'

            ],
            borderWidth: 1
        }]

    },
    options: {
        responsive: true
    }
});