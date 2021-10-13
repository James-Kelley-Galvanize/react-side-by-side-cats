/* 
This file is a stand-in for a Hooks-based app.
*/
import { useState } from "react";
import CatBox from "./components/CatBox";



function App() {
let [cats, setCats]= useState([]);

async function getCatImage() {
  let res = await fetch("https://api.thecatapi.com/v1/images/search/");
  let json = await res.json();
  console.log(json);
  let imageUrl = await json[0].url;
  return imageUrl;
}

function getCatName() {
  let faker = require("faker");
  return faker.name.firstName();
}
async function addCat(e){
  e.preventDefault()
  let url = await getCatImage()
  let name = getCatName()
  setCats([...cats, {url, name}])
}


  return (
    <div className="App">
      <div className="app-title flex-column">
        <div>Classical Catbox</div>
        <button onClick={(e) => addCat(e)}>Cat</button>
      </div>
      {/* <button onClick={(e) => this.addCat(e)}>Cat</button> */}
      <CatBox cats={cats} />
    </div>
  );
}
export default App;
