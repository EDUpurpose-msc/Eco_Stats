document.addEventListener('DOMContentLoaded', function () {
    const programForm = document.getElementById('programForm');
    const updateProgramForm = document.getElementById('updateProgramForm');
    const deleteProgramForm = document.getElementById('deleteProgramForm');

    // Handle adding a new program
    programForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const programName = document.getElementById('programName').value;

        fetch('/programs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: programName })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Program added:', data);
            alert('Program added successfully');
        })
        .catch(error => console.error('Error:', error));
    });

    // Handle updating an existing program
    updateProgramForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const programId = document.getElementById('programId').value;
        const newProgramName = document.getElementById('newProgramName').value;

        fetch(`/programs/${programId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: newProgramName })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Program updated:', data);
            alert('Program updated successfully');
        })
        .catch(error => console.error('Error:', error));
    });

    // Handle deleting an existing program
    deleteProgramForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const programId = document.getElementById('deleteProgramId').value;

        fetch(`/programs/${programId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .then(data => {
            console.log('Program deleted:', data);
            alert('Program deleted successfully');
        })
        .catch(error => console.error('Error:', error));
    });

    // Fetch and display chart data
    fetch('http://localhost:3000/reports-sections') // Fetch report sections data
    .then(response => response.json())
    .then(data => {
        // Handle fetched report sections data
        console.log('Fetched report sections data:', data);
        // You can process or use the fetched data here as needed
    })
    .catch(error => console.error('Error fetching report sections data:', error));

    // Fetch and display chart data
    fetch('/reports')
    .then(response => response.json())
    .then(data => {
        const ctx = document.getElementById('lineChart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: data.map(item => item.name),
                datasets: [{
                    label: 'Earnings',
                    data: data.map(item => item.value),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });

        const doughnutCtx = document.getElementById('doughnut').getContext('2d');
        new Chart(doughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Land', 'Forestry', 'Biodiversity'],
                datasets: [{
                    label: 'Employees',
                    data: [3, 3, 2],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: 'Employee Distribution'
                    }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching report data:', error));
});
