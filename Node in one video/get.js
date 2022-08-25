const express =require("express")
const router =express.Router();
router.get('/arslan',function(req,res){
    res.send("hello arslan")
});
module.exports=router;