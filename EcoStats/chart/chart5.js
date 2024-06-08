var ctx = document.getElementById('barChart5').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Boac (Capital)', 'Buenavista', 'Gasan', 'Mogpog', 'Santa Cruz', 'Torrijos'],
        datasets: [
            {
                label: 'Male',
                data: [8, 1, 2, 1, 7, 4], // Data for male patents
                backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for male
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Female',
                data: [3, 2, 6, 0, 5, 5], // Data for female patents
                backgroundColor: 'rgba(255, 99, 132, 0.5)', // Pink color for female
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
    }
});
