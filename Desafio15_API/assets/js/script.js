let grafico;

document.getElementById('formularioConversion').addEventListener('submit', async function(event) {
    event.preventDefault();

    const monto = document.getElementById('pesosClpValue').value;
    const currency = document.getElementById('currency').value;

    try {
        const response = await fetch('https://mindicador.cl/api/');
        if (!response.ok) throw new Error('Error al obtener los datos de la API');
        const data = await response.json();

        let rate = 0;
        switch(currency) {
            case 'dolar':
                rate = data.dolar.valor;
                break;
            case 'euro':
                rate = data.euro.valor;
                break;
            case 'uf':
                rate = data.uf.valor;
                break;
            case 'bitcoin':
                rate = data.bitcoin.valor;
                break;
            case 'utm':
                rate = data.utm.valor;
                break;
            default:
                alert('Moneda no soportada');
                return;
        }

        const result = monto / rate;
        document.getElementById('resultado').innerText = `Resultado: $${result.toFixed(2)}`;

        generateChart(currency);
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultado').innerText = `Error: ${error.message}`;
    }
});

async function generateChart(currency) {
    try {
        const response = await fetch(`https://mindicador.cl/api/${currency}`);
        if (!response.ok) throw new Error('Error al obtener los datos de la API para el gráfico');
        const data = await response.json();

        const fechas = data.serie.map(entry => entry.fecha.split('T')[0]).reverse();
        const valores = data.serie.map(entry => entry.valor).reverse();

        const ctx = document.getElementById('seccionGrafico').getContext('2d');

        if (grafico) {
            grafico.destroy();
        }

        grafico = new Chart(ctx, {
            type: 'line',
            data: {
                labels: fechas,
                datasets: [{
                    label: `Valor del ${currency} en CLP`,
                    data: valores,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 2,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: false
                    },
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultado').innerText = `Error al generar el gráfico: ${error.message}`;
    }
}
