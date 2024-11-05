import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavbarWithStyling from "./components/navbar/NavbarWithStyling";
import HoverButton from "./components/button/HoverButton";

function App() {
  const [count, setCount] = useState(0);
  const listMenu = ["Home", "About", "Logout"];

  return (
    <>
      <NavbarWithStyling
        menu={listMenu}
        name="RAFIF"
        age="21"
        address="Semarang"
      />
      <NavbarWithStyling 
        name="FARREL" 
        age="22" 
        address="Kalimantan" />
      <NavbarWithStyling
        menu={["Tentang Saya", "Tentang Kamu", "Tentang Dia"]}
        name="AGIL"
        age="21"
        address="Salatiga"
      />
      <HoverButton>
        <p>HOVER BUTTON CHILDREN</p>
      </HoverButton>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
