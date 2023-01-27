import React, { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import { AiFillCaretRight } from "react-icons/ai";
import myData from "./data/data";
// const url = "https://course-api.com/react-tabs-project";
function App() {
  const [isActive, setIsActive] = useState(false);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   myUrl();
  // }, []);
  // async function myUrl() {
  //   const FETCHED_DATA = await fetch(url);
  //   const FETCHED_JSON = await FETCHED_DATA.json();
  //   setData(FETCHED_JSON);
  //   console.log(FETCHED_JSON);
  // }

  return (
    <section className="container">
      <h1 className="title">Experience</h1>
      <div className="company-tab">
        <a onClick={() => setIsActive(true)}>
          <h4>John</h4>
        </a>
        <h4 onClick={() => setIsActive(true)}>Smith</h4>
        <h4 onClick={() => setIsActive(true)}>Tom</h4>
      </div>

      {myData.map((d, inx) => {
        <div className="job" key={inx}>
          <div className="company-content">
            <h2 className="job-title">{d.title}</h2>
            <p className="company-name">{d.company}</p>
            <p className="date">{d.dates}</p>
            <div className="text">
              <AiFillCaretRight />
              <p>{d.duties[0]}</p>
            </div>
            <div className="text">
              <AiFillCaretRight />
              <p>{d.duties[1]}</p>
            </div>
            <div className="text">
              <AiFillCaretRight />
              <p>{d.duties[2]}</p>
            </div>
          </div>
        </div>;
      })}
      {/* {isActive ? { data } : <div></div>} */}
    </section>
  );
}

export default App;
