let gMensual, gAnual, datos;

fetch("/api/anios")
  .then((r) => r.json())
  .then((anios) => {
    const sel = document.getElementById("anioMensual");
    const chk = document.getElementById("checkboxAnios");

    anios.forEach((a) => {
      sel.add(new Option(a, a));
      chk.innerHTML += `
        <label class="me-2 small">
        <input type="checkbox" value="${a}" onchange="actualizarAnual()"> ${a}
        </label>`;
    });
    cargarMensual(anios[0]);
    cargarPromedio();
  });

document.getElementById("anioMensual").onchange = (e) =>
  cargarMensual(e.target.value);

function cargarMensual(a) {
  fetch(`/api/mensual/${a}`)
    .then((r) => r.json())
    .then((d) => {
      if (gMensual) gMensual.destroy();
      gMensual = new Chart(graficaMensual, {
        type: "line",
        data: {
          labels: d.meses,
          datasets: [
            {
              data: d.valores,
              label: "mm",
              borderColor: "#2e7d32",
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
        },
      });
      resumenMensual.innerHTML = `Promedio anual del ${a}: <b>${d.promedio} mm</b>`;
    });
}

function cargarPromedio() {
  fetch("/api/promedio")
    .then((r) => r.json())
    .then((d) => (datos = d));
}

function actualizarAnual() {
  const sel = [
    ...document.querySelectorAll("#checkboxAnios input:checked"),
  ].map((i) => +i.value);
  if (sel.length == 0) {
    if (gAnual) gAnual.destroy();
    interpretacion.innerHTML = "";
    return;
  }

  const idx = datos.anios
    .map((a, i) => (sel.includes(a) ? i : null))
    .filter((i) => i != null);
  const vals = idx.map((i) => datos.valores[i]);
  const prom = vals.reduce((a, b) => a + b, 0) / vals.length;

  if (gAnual) gAnual.destroy();
  gAnual = new Chart(graficaAnual, {
    type: "line",
    data: {
      labels: idx.map((i) => datos.anios[i]),
      datasets: [
        {
          data: vals,
          label: "Promedio anual",
          borderColor: "#1b5e20",
          tension: 0.4,
        },
        {
          data: Array(vals.length).fill(datos.climatologia),
          label: "Media climatológica",
          borderDash: [5, 5],
          borderColor: "#1565c0",
        },
      ],
    },
    options: { responsive: true, maintainAspectRatio: false },
  });

  interpretacion.innerHTML = `Los años seleccionados presentan un promedio de <b>${prom.toFixed(1)} mm</b>.
Valores inferiores a la media climatológica (${datos.climatologia} mm) pueden
favorecer condiciones secas, asociadas a mayor riesgo de incendios forestales.`;
}

function seleccionarTodos() {
  document
    .querySelectorAll("#checkboxAnios input")
    .forEach((c) => (c.checked = true));
  actualizarAnual();
}
function limpiar() {
  document
    .querySelectorAll("#checkboxAnios input")
    .forEach((c) => (c.checked = false));
  if (gAnual) gAnual.destroy();
  interpretacion.innerHTML = "";
}
