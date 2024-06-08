var ctx = document.getElementById('lineChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'],
        datasets: [{
            label: 'Actual Area Planned (In hectare)',
            data: [306, 324, 959, 0, 563, 27, 90, 244.487, 0, 80, 100, 0], 
            backgroundColor: [
                'rgba(85,85,85, 1)'

            ],
            borderColor: 'rgb(41, 155, 99)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});