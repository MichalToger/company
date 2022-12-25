function company(props) {
    const {CompanyName} = props;
    const {NumberOfEmployees} = props; 
    const {Adress} = props; 
    return (
      <div className="App">
      <h1>Company component</h1>
      <h2>Company name : {CompanyName}</h2>
      <p>Number of Employees: {NumberOfEmployees}</p>
      <p>Address: {Adress}</p>
      </div>
    );
  }
  
  export default company;