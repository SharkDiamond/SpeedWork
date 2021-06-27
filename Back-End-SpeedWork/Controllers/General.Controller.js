//const {response}=require("express");
const {returnReporstDay,returnPanelData,amountForMonth}=require("../Data/Database");


const ReportsDay=async(req,res)=>{
   
    try {
        
        let result=await returnReporstDay();

        res.status(200).json(result).end();

    } catch (error) {

        res.status(400).json(error);

    }


}


const GeneralPanel=async(req,res)=>{

    try {

       let DATA=await returnPanelData();

       res.status(200).json(DATA).end();

        
    } catch (error) {

        res.status(404).end();
        
    }




}

const amountData=async(req,res)=>{

    try {
        
        let Data=await amountForMonth(req.body.type);

        res.status(200).json(Data).end();

    } catch (error) {
        
        res.status(500);

    }

  




}



module.exports={ReportsDay,GeneralPanel,amountData};