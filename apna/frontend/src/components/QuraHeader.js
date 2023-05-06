
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FeaturedPlayListIcon from "@mui/icons-material/FeaturedPlayList";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import TextField from '@mui/material/TextField';



import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';


import "./Css/QuraHeader.css";

import Modal from "react-responsive-modal";

import "react-responsive-modal/styles.css";
import { useState } from "react";

function QuraHeader() {
const [isModalOpen  ,setIsModalOpen, ] = useState(false);
const Close = <CloseIcon/>

  return (
    <div className="qHeader  ">
      <div className="qHeader-content flex  justify-center ">
        <div className="qHeader__logo">
          <img
            src="https://video-public.canva.com/VAD8lt3jPyI/v/ec7205f25c.gif"
            alt="logo"
          />
        </div>

        <div className="qHeader__icons  flex text-gray  gap-7  ">
          <div className="qHeader__icon">
            <MapsHomeWorkIcon />
          </div>

          <div className="qHeader__icon">
            <AssignmentIcon />
          </div>

          <div className="qHeader__icon">
            <FeaturedPlayListIcon />
          </div>

          <div className="qHeader__icon">
            <PeopleOutlineIcon />
          </div>

          <div className="qHeader__input">
            <SearchIcon />
            <input type="text" placeholder="Search questions" />
          </div>

          <div className="qHeader__icon">
           <Button  onClick={() => setIsModalOpen (true)}  >This is Button </Button>
           <Modal
            open={isModalOpen}
             closeIcon={Close} 
             onClose={() => setIsModalOpen(false)}
             closeOnEsc
             center>
            
              
            <div className="modal__title" >
              <h5>Add Question</h5>
              <h5>Share Link</h5>
            </div>
            <div className="modal__info">
              <Avatar  className="avatar" />
              <div className="modal__scope">
                <PeopleOutlineIcon />
                <p>Public</p>
                <ExpandMoreIcon />
              </div>
              </div>

              <div className="modal__Field">
              <TextField id="standard-basic" label="Write your Question" variant="standard" />
              
             
              
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <input
                  type="text"
                 
                  
                  style={{
                    margin: "5px 0",
                    border: "1px solid lightgray",
                    padding: "10px",
                    outline: "2px solid #000",
                  }}
                  placeholder="Optional: inclue a link that gives context"
                />
               
              </div>
            </div>

            <div className="modal__buttons">
              <button className="cancle" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button   type="submit" className="add">
                Add Question
              </button>
            </div>
           </Modal>
          </div>

          <div className="qHeader__icon">
            <Avatar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuraHeader;
