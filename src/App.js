import "./App.css"
import Item from "./component/Item";
import ItemDate from "./component/Itemdate";

function App() {
  const reposnse = [
    {
    itemName: "Nirma",
    day: 20,
    month: "June",
    year: 1924
  },
  {
    itemName: "Nirma2",
    day: 202,
    month: "June2",
    year: 19242
  },
  {
    itemName: "Nirma3",
    day: 203,
    month: "June3",
    year: 19243
  }
]
  return (
   <div>
    <Item name = {reposnse[0].itemName}></Item> 
    <ItemDate day= {reposnse[0].day} month = {reposnse[0].month} year = {reposnse[0].year}></ItemDate>

    <Item name = {reposnse[1].itemName}></Item> 
    <ItemDate day= {reposnse[1].day} month = {reposnse[1].month} year = {reposnse[1].year}></ItemDate>

    <Item name = {reposnse[2].itemName}></Item> 
    <ItemDate day= {reposnse[2].day} month = {reposnse[2].month} year = {reposnse[2].year}></ItemDate>
    <div className="App">
    
  <h1>Hello React</h1>
   </div>
   
   </div> 
  );
}

export default App;
