const db = require('../db/db')
 const addAddress =(req,res)=>{
    try {
        const {id,streetAddress,city,state,postalCode,country} = req.body
        
        if (!id && !streetAddress && !city && !state && !postalCode && !country) {
            res.status(404).send({message:"must fill the all input ",status:false})
            return
        }
        const query = "INSERT INTO Address (id,streetAddress, city, state, postalCode, country) VALUES (?,?,?,?,?,?)";
        const value =[id,streetAddress,city,state,postalCode,country]
         db.query(query,value,(err,result)=>{
            if (err) {

                console.log(err);

                res.status(500).send({message:"not inserted",status:false})
                return
            }else if(result.affectedRows > 0){
                res.status(200).send({message:"inserted successfully" ,status : true})
                return
            }

            console.log(result);
            
         })
    } catch (error) {
        console.log(error);
        
        res.status(500).send({message:"Internal server Error",err:error})
    }
}

const getAddress =(req,res)=>{
    try {
        const query = "select * from Address";
         db.query(query,(err,result)=>{
            if (err) {
                res.status(500).send({message:"fetched failure",status:false})
                return
            }else if(result){
                res.status(200).send({message:"fetched successfully" ,status : true ,data : result})
                return
            }
         })
    } catch (error) {
        res.status(500).send({message:"Internal server Error",err:error})
    }
}
const deleteAddress =(req,res)=>{
    try {
        const { id } = req.body 
        const query = "DELETE FROM Address WHERE id = ?";
        if (!id) {
            res.status(404).send({message:"must fill the all input ",status:false})
            return
        }
         db.query(query,[id],(err,result)=>{
            if (err) {
                res.status(500).send({message:"not delete",status:false})
                return
            }else{
                if (result.affectedRows > 0) {
                    res.status(200).send({message:"delete successfully" ,status : true})

                }else{
                    res.status(200).send({message:"ID not fount " ,status : true})
                    return
                }
                
            }
            
         })
    } catch (error) {
        res.status(500).send({message:"Internal server Error",err:error})
    }
}

const updateAddress = (req, res) => {
    try {
        const { id, ...updateFields } = req.body; 

        if (!id) {
            res.status(400).send({ message: "ID is required", status: false });
            return;
        }

        const fields = Object.keys(updateFields);
        if (fields.length === 0) {
            res.status(400).send({ message: "No fields provided for update", status: false });
            return;
        }

        const setClause = fields.map(field => `${field} = ?`).join(", ");
        const values = [...Object.values(updateFields), id];

        const query = `UPDATE Address SET ${setClause} WHERE id = ?`;

        db.query(query, values, (err, result) => {
            if (err) {
                res.status(500).send({ message: "Update failed", status: false, error: err });
                return;
            }

            if (result.affectedRows > 0) {
                res.status(200).send({ message: "Updated successfully", status: true });
            } else {
                res.status(404).send({ message: "ID not found", status: false });
            }
        });

    } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error: error });
    }
};



module.exports ={addAddress,getAddress,deleteAddress,updateAddress}
