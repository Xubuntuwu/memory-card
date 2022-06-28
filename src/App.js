import './App.css';
import { useEffect, useState } from "react";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  const [currentscore, setcurrentscore] = useState(0);
  const [bestscore, setbestscore] = useState(0);

  const setcurrentScores = (newcurrentscore) =>{
    setcurrentscore(newcurrentscore);
    // console.log(newcurrentscore, bestscore);
  }
  const setbestScores = (newbestscore) =>{
    setbestscore(newbestscore);
    // console.log(currentscore, newbestscore);
  }
  return (
    <div className="App">
      <Header bestscore={bestscore} currentscore={currentscore}/>
      <CardContainer setcurrentscores={setcurrentScores} setbestscores={setbestScores}/>
    </div>
  );
}

export default App;
