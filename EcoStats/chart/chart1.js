var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Boac', 'Gasan', 'Mogpog', 'Torrijos', 'Buenavista'],
        datasets: [{
            label: 'Number of patents issued',
            data: [1485, 277, 340, 228, 238],
            backgroundColor: [
                'rgba(6,98,59)'

            ],
            borderColor: 'rgb(100,157,102)',

            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});