const express = require("express");
const question = require("../Moduls/question");

const router = express.Router();

router.post('/', async(req, res) =>{

      try{
                   await questionDb
                   .create({
                        questionName: req.body.questionName,
                        questionUrl: req.body.questionUrl,
                        user: req.body.user,
                   }).then(()=>{
                        res.status(200).send({
                              status: success,
                              message: "Question added successfully"
                        });
                   }).catch( (e)=>{
                        res.status(400).send({
                              staus: false,
                              message: "Bad format",
                            });
                   })

                       

      }catch(e){
 
            res.status(500).send({
                  status: false,
                  message: "Error while adding question",
                });
      }

})



module.exports = router;

