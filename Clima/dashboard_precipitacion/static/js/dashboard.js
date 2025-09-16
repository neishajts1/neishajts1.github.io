const meses = ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];
let datos = {};
let chartYear, chartMulti;

fetch("/api/precipitacion")
    .then(r => r.json())
    .then(json => {
        datos = json;
        inicializar();
    });

function inicializar() {
    const years = Object.keys(datos);

    const select = document.getElementById("yearSelect");
    years.forEach(y => select.innerHTML += `<option>${y}</option>`);

    select.onchange = () => actualizarAnual(select.value);

    const box = document.getElementById("yearsBox");
    years.forEach(y => {
        box.innerHTML += `<label><input type="checkbox" value="${y}"> ${y}</label>`;
    });
    box.onchange = actualizarMulti;

    crearGraficos();
    actualizarAnual(years[0]);
}

function crearGraficos() {
    chartYear = new Chart(chartYear = document.getElementById("chartYear"), {
        type: "line",
        data: { labels: meses, datasets: [{ data: [] }] }
    });

    chartMulti = new Chart(document.getElementById("chartMulti"), {
        type: "line",
        data: { labels: meses, datasets: [] }
    });
}

function stats(v) {
    const t = v.reduce((a,b)=>a+b,0);
    return {
        t: t.toFixed(1),
        a: (t/12).toFixed(1),
        x: Math.max(...v).toFixed(1),
        n: Math.min(...v).toFixed(1)
    };
}

function actualizarAnual(year) {
    const v = datos[year];
    chartYear.data.datasets[0].data = v;
    chartYear.update();

    const s = stats(v);
    total.textContent = s.t;
    avg.textContent = s.a;
    max.textContent = s.x;
    min.textContent = s.n;
}

function actualizarMulti() {
    const seleccionados = [...document.querySelectorAll("input:checked")].map(i => i.value);
    chartMulti.data.datasets = [];

    seleccionados.forEach(y => {
        chartMulti.data.datasets.push({
            label: y,
            data: datos[y],
            borderWidth: 2
        });
    });

    chartMulti.update();
}
