import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Main from "./conpenont/Main";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isActive, setIsActive] = useState(0);
  const [data, setData] = useState([]);

  async function myUrl() {
    const FETCHED_DATA = await fetch(url);
    const FETCHED_JSON = await FETCHED_DATA.json();
    setData(FETCHED_JSON);
  }
  useEffect(() => {
    myUrl();

  }, []);

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="company-tab">
        {
          data.map((d, inx) => {
            console.log(inx)
            return(<h4><a onClick={() => setIsActive(inx)}>{d.company}</a></h4>
            )
          })
        }
      </div>
      <div className="job" >
        <Main data={data} setIsActive={setIsActive} isActive={isActive} />

      </div>
    </section>
  );
}

export default App;
