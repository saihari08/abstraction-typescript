import React from 'react';
import logo from './logo.svg';
import './App.css';
import Retail from './classes/Retail';
import OilRefining from './classes/OilRefining';
import petroleum from './classes/Petroleum';
import RelianceIndustries from './classes/RelianceIndustries';


function App() {


 // let Reliance =new RelianceIndustries(); 


 let retail= new Retail();
 console.log(`Retail.founded`)
 console.log(`Retail.founder`)
// console.log(`Retail.no.of stores`)

 let oil   = new OilRefining();
 console.log(`OilRefining.founded`)
 console.log(`OilRefining.founder`)

 let petrol= new petroleum();
 console.log(`petroleum.founded`)
 console.log(`petroleum.founder`)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
