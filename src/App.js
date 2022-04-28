import "./App.css";
import "./Text";
import "./Text2";
import React from "react";
import "@fontsource/playfair-display";
import profile from './profile.jpg';

const PERSONAL_DATA = [
  {
    name: "Pétur Viðar Kristjánsson",
    description: "Veitingamaður, golfari, skytta og gamer",
  },
];

const WORK_DATA = [
  {
    workplace: "Intersport",
    period: "2000 - 2002",
    title: "Sales",
  },
  {
    workplace: "Bílaþjónusta Péturs",
    period: "2002 - 2003",
    title: "Mechanic",
  },
  {
    workplace: "Fjöruborðið",
    period: "2003 - present",
    title: "Owner/Manager",
  },
];


 const App = () => {
  return (
      <><div className="Title">{PERSONAL_DATA.map((name) => (
      <>
        <>
          <h1>{name.name}</h1>
          <img className="image" src={profile} alt='profile img' />
        </>
      </>
    ))}
    </div><><div className="Title">{PERSONAL_DATA.map((info) => (
      <>
        <>
          <p>{info.description}</p>
        </>
      </>
    ))}
         </div><header className="App-header">

          {WORK_DATA.map((data) => (
            <>
              <>
                <h2>Workplace: {data.workplace}</h2>Years worked:{" "}
                <p>{data.period}</p>Job description:{" "}
              </>
              <p>{data.title}</p>
            </>
          ))}
        </header></></>
          
  );
}

export default App;
