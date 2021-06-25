// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import  {connect}  from "../../lib/db";

export default async function getAll(req, res) {
    const connection = await connect();
    
    try{
         const [rows] = await connection.query('SELECT * FROM `usuarios`');
         res.status(200).json({rows:rows});
    }catch(error){
        console.log(error);
    }
}
