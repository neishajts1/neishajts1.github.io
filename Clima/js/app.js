document.addEventListener("DOMContentLoaded", () => {
  console.log("AdminLTE cargado correctamente 🚀");

  // Ejemplo: alerta al hacer clic en botón
  const btn = document.createElement("button");
  btn.textContent = "Haz clic aquí";
  btn.className = "btn btn-success mt-3";
  btn.onclick = () => alert("Hola desde AdminLTE + JS");

  document.querySelector(".content .container-fluid").appendChild(btn);
});


// Gráfico de temperatura Mensual por mes
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("tempMensualChart").getContext("2d");

  // Etiquetas de meses
  const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  // Datos de ejemplo (°C)
  const dataCelsius = [22, 23, 25, 26, 27, 28, 29, 29, 28, 26, 24, 22];

  // Crear gráfica de líneas
  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [{
        label: "Temp. promedio (°C)",
        data: dataCelsius,
        borderColor: "rgba(54, 162, 235, 1)", // azul
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 2,
        fill: false,
        tension: 0.25,      // suaviza la línea
        pointRadius: 3
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false, // permite que la tarjeta controle el alto
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.parsed.y} °C`
          }
        },
        legend: {
          display: true
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: { display: true, text: "°C" },
          ticks: { stepSize: 2 }
        },
        x: {
          title: { display: true, text: "Mes" }
        }
      }
    }
  });
});


// Gráfico de temperatura Promedio por mes
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("tempPromChart").getContext("2d");

  // Etiquetas de meses
  const labels = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];

  // Datos de ejemplo (°C)
  const tempMin = [18, 19, 20, 21, 22, 23, 24, 24, 23, 21, 20, 18];
  const tempProm = [22, 23, 25, 26, 27, 28, 29, 29, 28, 26, 24, 22];
  const tempMax = [28, 29, 30, 31, 32, 33, 34, 34, 33, 31, 29, 28];

  // Crear gráfica de líneas
  new Chart(ctx, {
    type: "line",
    data: {
      labels,
      datasets: [
        {
          label: "Mínima (°C)",
          data: tempMin,
          borderColor: "rgba(54, 162, 235, 1)", // azul
          backgroundColor: "rgba(54, 162, 235, 0.2)",
          fill: false,
          tension: 0.25,
          pointRadius: 3
        },
        {
          label: "Promedio (°C)",
          data: tempProm,
          borderColor: "rgba(75, 192, 192, 1)", // verde agua
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          fill: false,
          borderWidth: 3,
          tension: 0.25,
          pointRadius: 4
        },
        {
          label: "Máxima (°C)",
          data: tempMax,
          borderColor: "rgba(255, 99, 132, 1)", // rojo
          backgroundColor: "rgba(255, 99, 132, 0.2)",
          fill: false,
          tension: 0.25,
          pointRadius: 3
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} °C`
          }
        },
        legend: {
          display: true,
          position: "top"
        }
      },
      scales: {
        y: {
          beginAtZero: false,
          title: { display: true, text: "°C" }
        },
        x: {
          title: { display: true, text: "Mes" }
        }
      }
    }
  });
});

