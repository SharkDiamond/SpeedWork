const {DepartamentAndAmountReports}=require("../Data/Database");


const Lista=async(req,res)=>{
    
    try {
        
        let [Nombres,Cantidades]=await DepartamentAndAmountReports();
        
        let NombresConCantidades=[];

      
        Nombres.forEach((nombres,index) => {
            
            NombresConCantidades.push({nombre:nombres,cantidad:Cantidades[index]});
            
        
        
        });

        res.status(200).json(NombresConCantidades).end();


    } catch (error) {
        
    }
        

       

}



module.exports={Lista};