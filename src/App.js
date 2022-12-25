import './App.css';
import Company from './Company';
function App() {
  return (
    <div className="App">
    <Company CompanyName = "Teva" NumberOfEmployees = "3000" Adress = "Haifa"/>
    <Company CompanyName = "AVX" NumberOfEmployees = "150"   Adress =  "Jerusalem" />
    <Company CompanyName = "Intel" NumberOfEmployees = "10000" Adress = "Tel Aviv" />
    </div>
  );
}

export default App;
