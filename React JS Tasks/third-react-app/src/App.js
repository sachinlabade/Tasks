
import './App.css';
import Row from './components/Row';
import assassin from "./Assets/images/assassin.webp";
import naruto from "./Assets/images/naruto.webp";
import assassin2 from "./Assets/images/assassin2.webp";

function App() {
  const data =[

    {
      srNo: 1,
      studName: "sachin",
      RollNo: 104,
      percentage: 100,
    },
    {
      srNo: 2,
      studName: "Kiran",
      RollNo: 105,
      percentage: 200,
    },
    {
      srNo: 3,
      studName: "Dipak",
      RollNo: 106,
      percentage: 300,
    },
    {
      srNo: 4,
      studName: "gaurav",
      RollNo: 107,
      percentage: 150,
    },
  ];
  return(
    <div>
      <h1>Student Data</h1>
      <table id="table" border="1">
        <thead>
          <tr>
            <th>srNo</th>
            <th>studName</th>
            <th>RollNo</th>
            <th>percentage</th>
            <th>Description ( By Children Peop)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i)=>{
            return(
              <Row 
              key={row.RollNo}
              srNo={row.srNo}
              studName={row.studName}
              RollNo={row.RollNo}
              percentage={row.percentage}>
                <p>Hello, I'm Inside a row component having RollNo : {row.RollNo}</p>
              </Row>

            );
          })
          }
        </tbody>      
        </table>
        <h1>Using Assets / Media In react - </h1>
        <img src={assassin} alt="Assassin pic" width="25%"/>
        <img src={assassin2} alt="women Assassin pic" width="36%"/>
        <img src={naruto} alt="naruto pic" width="33%"/>
      </div>
  );
   
    
};

export default App;
