var ctx = document.getElementById('barChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Mogpog', 'Santa Cruz', 'Torrijos'],
        datasets: [
            {
                label: 'Developed',
                data: [0, 6, 7],
                backgroundColor: 'rgba(243,168,41,0.6)', // Color 1
                borderWidth: 1
            },
            {
                label: 'Underdeveloped',
                data: [1, 3, 1],
                backgroundColor: 'rgba(223,41,54,0.6)', // Color 2
                borderWidth: 1
            },
            {
                label: 'Abandoned',
                data: [0, 2, 0],
                backgroundColor: 'rgba(118,58,118,0.6)', // Color 3
                borderWidth: 1
            },
            {
                label: 'Undeveloped',
                data: [1, 5, 1],
                backgroundColor: 'rgba(32,142,196,0.6)', // Color 4
                borderWidth: 1
            },
            {
                label: 'Underutilized',
                data: [1, 3, 0],
                backgroundColor: 'rgba(255,241,241,0.6)', // Color 5
                borderWidth: 1
            },
            {
                label: 'Reverted',
                data: [0, 2, 0],
                backgroundColor: 'rgba(83,77,107,0.6)', // Color 6
                borderWidth: 1
            },
            {
                label: 'Terminated',
                data: [5, 6, 0],
                backgroundColor: 'rgba(230,85,87,0.6)', // Color 7
                borderWidth: 1
            },
            {
                label: 'Expired',
                data: [4, 5, 0],
                backgroundColor: 'rgba(244,143,177,0.6)', // Color 8
                borderWidth: 1
            },
            {
                label: 'Cancelled',
                data: [6, 5, 3],
                backgroundColor: 'rgba(129,199,132,0.6)', // Color 9
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true,
    }
});
