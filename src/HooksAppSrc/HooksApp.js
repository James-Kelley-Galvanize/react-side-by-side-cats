import { useEffect, useState } from "react";
import CatBox from "./components/CatBox";
const URL = `https://api.thecatapi.com/v1/images/search/`;

function App() {
  let [cats, setCats] = useState([]);
  // let [catCount, setCatCount] = useState(0);

  async function getCatImage() {
    let res = await fetch(`${URL}`);
    let json = await res.json();
    console.log(json);
    let imageUrl = await json[0].url;
    return imageUrl;
  }

  function getCatName() {
    let faker = require("faker");
    return faker.name.firstName();
  }

  async function makeNewCat() {
    let url = await getCatImage();
    let name = getCatName();
    // setCats((currentStateValue) => {
    //   let out = [...currentStateValue, { url, name }];
    //   console.log(out);
    //   return out;
    // });
    setCats([...cats, { url, name }]);
  }

  function addCat(e) {
    e.preventDefault();
    makeNewCat();
    // setCatCount(catCount + 1);
  }
  // useEffect(() => {
  //   async function makeNewCat(){
  //     let url = await getCatImage();
  //     let name = getCatName();
  //     setCats((currentStateValue)=>{
  //       let out =   [...currentStateValue, { url, name }]
  //       console.log(out)
  //       return out
  //     });
  //     // setCats([...cats, {url, name}])

  //   }
  //   if (catCount > cats.length) {
  //     makeNewCat()
  //   }
  // }, [ catCount]);

  return (
    <div className="App">
      <div className="app-title flex-column">
        <div>Hooks Catbox</div>
        <button onClick={(e) => addCat(e)}>Cat</button>
      </div>
      {/* <button onClick={(e) => this.addCat(e)}>Cat</button> */}
      <CatBox cats={cats} />
    </div>
  );
}
export default App;
