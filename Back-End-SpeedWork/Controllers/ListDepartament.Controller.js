const {DepartamentAndAmountReports}=require("../Data/Database");


const Lista=async(req,res)=>{
    
    try {
        
        let [Nombres,Cantidades,id]=await DepartamentAndAmountReports();
        
        let NombresConCantidades=[];

      
        Nombres.forEach((nombres,index) => {
            
            NombresConCantidades.push({NombreDepartamento:nombres,Cantidad:Cantidades[index],idDepartamento:id[index]});
            
        });

        res.status(200).json(NombresConCantidades).end();


    } catch (error) {
        
        console.log(error);
        
    }
        

       

}



module.exports={Lista};