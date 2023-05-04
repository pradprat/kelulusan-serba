import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.less";
import { Lulus } from "./pages/Lulus";
import { Login } from "./pages/Login";
import { CountDown } from "./pages/CountDown";
function App() {
  const [page, setpage] = useState("login");
  const [siswa, setsiswa] = useState<any>("0030850212");
  return (
    <div className="App">
      {page === "login" && (
        <Login
          onLoginSuccess={(siswa) => {
            setpage("lulus");
            setsiswa(siswa);
          }}
        ></Login>
      )}
      {page === "lulus" && <Lulus siswa={siswa}></Lulus>}
    </div>
  );
}

export default App;
