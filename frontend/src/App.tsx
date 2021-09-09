import BarChart from "componets/BarChart";
import DataTable from "componets/dataTable";
import DonutChart from "componets/DonutChart";
import Footer from "componets/Footer";
import NavBar from "componets/navBar/Index";


function App() {
  return (
    <>{/*Abrindo fragment*/}
    <NavBar/>
    <div className="container">
      <h1 className="text-primary py-3">Dashboard de vendas</h1>

      <div className="row px-3">
          <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso</h5>
              <BarChart/>

          </div>
          <div className="col-sm-6">
              <h5 className="text-center text-secondary">Todas as vendas</h5>
              <DonutChart/>

          </div>

      </div>

      <div className="py-3">
        <h4 className="text-primary">Todas as vendas</h4>

      </div>

      <DataTable/>
    </div>

    <Footer/>
    </>//Fechando fragnent
  
  );
}

export default App;
