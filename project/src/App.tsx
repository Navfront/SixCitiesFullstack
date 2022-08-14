import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";


const URL = process.env.REACT_APP_SURV || "http://localhost:5500/api/"
console.log('env react url = ', process.env.REACT_APP_SURV);


async function getClicks() {
  const res = await fetch(`${URL}users/clicks`);
  const clicks = await res.json();
  return clicks;
}

type Click = {
  _id: string
  clickDate: string
}

function App() {
  const [clicks, setClicks] = useState<Click[]>([]);

  useEffect(() => {
    getClicks().then((r) => {
      setClicks([...clicks, ...r]);
    });
  }, [setClicks]);

  const clickHandler = () => {
    fetch(`${URL}users/click`, {
      method: "POST",
      headers: {
        'content-type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({ clickDate: Date.now() }),
    }).then(res => res.json()).then(data => { console.log(data);
     setClicks([...clicks, data]) }).catch(e=>console.log(e)
    );



  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>My db knows {clicks.length} clicks!</h1>
        <p style={{color: "lightblue"}}>Last clicks:</p>
        {clicks.slice(clicks.length - 5, clicks.length).map((cl) => {

          const dateText = new Date(Number(cl.clickDate))
          return <p key={cl._id}>{String(dateText.toLocaleString()) }</p>
})}
        <a
          className="App-link"
          href="#"
          onClick={clickHandler}
          rel="noopener noreferrer"
        >
          Make a new click
        </a>
      </header>
    </div>
  );
}

export default App;
