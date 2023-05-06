import React from 'react'
import Avatar from "@mui/material/Avatar";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import RepeatIcon from '@mui/icons-material/Repeat';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import CloseIcon from '@mui/icons-material/Close';
import Modal from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./Css/Post.css"

import { useState } from 'react';


function Post() {
  const [isModalOpen  ,setIsModalOpen, ] = useState(false);
const Close = <CloseIcon/>
      return (
            <div className="post">
              <div className="post__info">
                <Avatar  />
                <h4> Post heading</h4>
        
                {/* <small>
                  <LastSeen  />
                </small> */}
              </div>
              <div className="post__body">
                <div className="post__question">
                  <p></p>
                  <button
                   onClick={()=>{
                    setIsModalOpen(true);
                   }}
                    className="post__btnAnswer"
                  >
                    Answer
                  </button>
                   <Modal
                   open={isModalOpen}
                   closeIcon={Close}
                   onClose={() => setIsModalOpen(false)}
                   closeOnEsc
                  
                   closeOnOverlayClick={false}
                    styles={{
                      overlay: {
                        height: "auto",
                      },
                    }}
                  >
                    <div className="modal__question">
                      <h1></h1>
                      <p>
                        asked by <span className="name"></span>
                        <span className="name">
                         
                        </span>
                      </p>
                    </div>
                    <div className="modal__answer">
                      <ReactQuill
                        // value={answer}
                        // onChange={handleQuill}
                        placeholder="Enter your answer"
                      />
                    </div> 
                    <div className="modal__button">
                      <button className="cancle" >
                        Cancel
                      </button>
                      <button  type="submit" className="add">
                        Add Answer
                      </button>
                    </div>
                  </Modal> 
                </div>
              
              </div>
              <div className="post__footer">
                <div className="post__footerAction">
                  <ArrowDownwardIcon />
                  <ArrowUpwardIcon />
                </div>
                <RepeatIcon />
                <ChatBubbleOutlineIcon />
                <div className="post__footerLeft">
                  <ShareIcon />
                  <MoreHorizIcon />
                </div>
              </div>
              <p
                style={{
                  color: "rgba(0,0,0,0.5)",
                  fontSize: "12px",
                  fontWeight: "bold",
                  margin: "10px 0",
                }}
              >
               
              </p>
        
              <div
                style={{
                  margin: "5px 0px 0px 0px ",
                  padding: "5px 0px 0px 20px",
                  borderTop: "1px solid lightgray",
                }}
                className="post__answer"
              >
             
              </div>
            </div>
         
  )
}

export default Post
