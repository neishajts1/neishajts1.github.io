// Configuración global de colores para que coincida con tu CSS
const colorPrimario = '#1565c0';
const colorSecundario = '#43a047';
const colorFondo = 'rgba(21, 101, 192, 0.1)';

let monthlyChartInstance = null;
let annualChartInstance = null;

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar gráficas al cargar
    initMonthlyChart();
    updateAnnualChart();

    // Event Listener para el cambio de año (Gráfica 1)
    document.getElementById('yearSelect').addEventListener('change', function() {
        updateMonthlyChart(this.value);
    });
});

// --- Lógica Gráfica 1: Mensual ---
function initMonthlyChart() {
    const ctx = document.getElementById('monthlyChart').getContext('2d');
    
    monthlyChartInstance = new Chart(ctx, {
        type: 'line',
        data: { labels: [], datasets: [] },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                title: { display: true, text: 'Precipitación Mensual (mm)' },
                legend: { display: false }
            },
            scales: {
                y: { beginAtZero: true, title: { display: true, text: 'Precipitación (mm)' } }
            }
        }
    });

    // Cargar datos del año por defecto (2015)
    updateMonthlyChart(document.getElementById('yearSelect').value);
}

function updateMonthlyChart(year) {
    fetch(`/api/mensual?year=${year}`)
        .then(response => response.json())
        .then(data => {
            monthlyChartInstance.data.labels = data.labels;
            monthlyChartInstance.data.datasets = [{
                label: `Precipitación ${data.year}`,
                data: data.data,
                borderColor: colorPrimario,
                backgroundColor: colorFondo,
                borderWidth: 2,
                pointRadius: 4,
                pointHoverRadius: 6,
                fill: true,
                tension: 0.3 // Suavizado de curva
            }];
            monthlyChartInstance.update();
        });
}

// --- Lógica Gráfica 2: Promedio Anual ---
function updateAnnualChart() {
    const start = document.getElementById('startYear').value;
    const end = document.getElementById('endYear').value;

    if (parseInt(start) > parseInt(end)) {
        alert("El año de inicio no puede ser mayor al año final");
        return;
    }

    fetch(`/api/anual?start=${start}&end=${end}`)
        .then(response => response.json())
        .then(data => {
            const ctx = document.getElementById('annualChart').getContext('2d');

            // Si ya existe, destruirla para crear una nueva (necesario al cambiar rangos drásticamente)
            if (annualChartInstance) {
                annualChartInstance.destroy();
            }

            annualChartInstance = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: 'Promedio Precipitación (mm)',
                        data: data.data,
                        borderColor: colorSecundario, // Verde UCV
                        backgroundColor: 'rgba(67, 160, 71, 0.1)',
                        borderWidth: 2,
                        pointBackgroundColor: '#fff',
                        pointBorderColor: colorSecundario,
                        fill: true,
                        tension: 0.2
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        title: { display: true, text: `Promedio de Precipitación (${start} - ${end})` },
                        tooltip: {
                            callbacks: {
                                label: function(context) {
                                    return context.parsed.y + ' mm';
                                }
                            }
                        }
                    }
                }
            });
        });
}