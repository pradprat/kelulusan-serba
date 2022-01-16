import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.less";
import { Lulus } from "./pages/Lulus";
import { Login } from "./pages/Login";
import { CountDown } from "./pages/CountDown";
function App() {
    const [page, setpage] = useState("login");
    const [nisn, setnisn] = useState("0030850212");
    return (
        <div className="App">
            
            {page === "login" && (
                <Login
                    onLoginSuccess={(nisn) => {
                        setpage("lulus");
                        setnisn(nisn);
                    }}
                ></Login>
            )}
            {page === "lulus" && <Lulus nisn={nisn}></Lulus>}
        </div>
    );
}

export default App;
