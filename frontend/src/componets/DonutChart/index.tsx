import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSum } from 'types/sale';
import { BASE_URL } from 'utils/request';

//Para ligação com a API, relacionado com a pasta types, [] significa que é um array
type ChartData = {
    labels: string[];
    series: number[];
}

const DonutChart = () => {

    //Instanciar
    //Essa forma de criar variável esta certa
    const [chartData, setCharData] = useState<ChartData>({ labels: [], series: []});


    //Para pegar do backend e forma correta de chamar o axios
    useEffect(() => {
        axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then(response => {
            const data = response.data as SaleSum[];
            const myLabels = data.map(x => x.sellerName);
            const mySeries = data.map(x => x.sum);

            setCharData({ labels: myLabels, series: mySeries});

        });
    } , []);


   
        //Agora vamos fazer uma requisição assíncrona, para que o site carrege movos dados sem parar oq já tem
        //.then" - ação a ser feita quando a resposta for sucesso, dentro tem uma junção, o argumento é a resposta
        //Precisamos dividir uma lista só para strings e outra só para numbers, para caver no gráfico que nem tinhamos no mockData

    //const mockData = {
        //series: [477138, 499928, 444867, 220426, 473088],
        //labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //}
    
    const options = {
        legend: {
            show: true
        }
    }
    

    return (
        <Chart
            options={{ ...options, labels: chartData.labels}} //tres pontinhos pode adicionar mais valores, xaxis é o eixo x, mockData é um nome bem usado para dados de mentira
            series={chartData.series} //Pegando os valores
            type="donut" //Informa que é um gráfico de barras
            height="240"
        />
    );
}

export default DonutChart;
