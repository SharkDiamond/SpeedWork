const {response}=require("express");
const {UpdatePassword}=require("../Data/Database");

 UpdatePassword().then((r)=>{

  console.log(r)


 });