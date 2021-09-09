import DataTable from "componets/dataTable";
import Footer from "componets/Footer";
import NavBar from "componets/navBar/Index";


function App() {
  return (
    <>{/*Abrindo fragment*/}
    <NavBar/>
    <div className="container">
      <h1 className="text-primary">Sou a</h1>
      <DataTable/>
    </div>

    <Footer/>
    </>//Fechando fragnent
  
  );
}

export default App;
