import React from 'react'
import "./Css/QuoraBox.css"
import Avatar from "@mui/material/Avatar";


function QuoraBox() {
  return (
    <div>
       <div className="quoraBox">
      <div className="quoraBox__info">
        <Avatar  />
      </div>
      <div className="quoraBox__quora">
        <h5>What is your question or link?</h5>
      </div>
      </div>
    </div>
  )
}

export default QuoraBox
