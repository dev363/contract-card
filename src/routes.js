import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Contract from "./pages/Contracts";

export default () =>{

    console.log(65655)

    return (
        <Router>
          <Routes>
            <Route path="/" exact element={<Contract/>} />
          </Routes>
        </Router>
      );
}
