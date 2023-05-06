import React from "react";
 import Feed from "./Feed";
import QuraHeader from "./QuraHeader";
 import Sidebar from "./Sidebar";
import Widget from "./Widget";
import "./Css/Qura.css";

function Qura() {
  return (
    <div className="quora">
      <QuraHeader />
      <div className="quora__contents">
        <div className="quora__content">
          <Sidebar />
          <Feed />
           <Widget /> 
        </div>
      </div>
    </div>
  );
}

export default Qura;
