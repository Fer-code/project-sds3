import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
        <Chart
            options={{ ...options, xaxis: mockData.labels}} //tres pontinhos pode adicionar mais valores, xaxis é o eixo x, mockData é um nome bem usado para dados de mentira
            series={mockData.series} //Pegando os valores
            type="bar" //Informa que é um gráfico de barras
            height="240"
        />
    );
}

export default BarChart;
