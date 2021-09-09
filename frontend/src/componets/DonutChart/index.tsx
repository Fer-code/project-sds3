import Chart from 'react-apexcharts';

const DonutChart = () => {

    const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    }
    
    const options = {
        legend: {
            show: true
        }
    }
    

    return (
        <Chart
            options={{ ...options, labels: mockData.labels}} //tres pontinhos pode adicionar mais valores, xaxis é o eixo x, mockData é um nome bem usado para dados de mentira
            series={mockData.series} //Pegando os valores
            type="donut" //Informa que é um gráfico de barras
            height="240"
        />
    );
}

export default DonutChart;
