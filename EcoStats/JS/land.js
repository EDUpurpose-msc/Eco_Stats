document.addEventListener("DOMContentLoaded", function() {
    const cards = document.querySelectorAll('.card');
    const charts = document.querySelectorAll('chart');
    const dataDiv = document.getElementById('data');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const cardId = this.id;
            charts.forEach(chart => {
                chart.style.display = 'none';
            });
            dataDiv.style.display = 'none';

            if (cardId === 'card1') {
                document.getElementById('chart1').style.display = 'block';
                document.getElementById('chart2').style.display = 'block';
                dataDiv.style.display = 'block';
            } else if (cardId === 'card2') {
                document.getElementById('chart3').style.display = 'block';
                document.getElementById('chart4').style.display = 'block';
                dataDiv.style.display = 'block';
            } else if (cardId === 'card3') {
                document.getElementById('chart5').style.display = 'block';
                document.getElementById('chart6').style.display = 'block';
                dataDiv.style.display = 'block';
            }
        });
    });
});
