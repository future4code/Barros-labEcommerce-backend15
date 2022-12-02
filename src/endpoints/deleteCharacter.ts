import {Request,Response} from 'express'
import connection from '../connection'


export default async function deleteCharacter(
    req: Request,
    res:Response
):Promise<void>{
    const {id} = req.params
    try{
    
     await connection("character")
          .delete()
          .where({id})
    

    res.status(200).end()
    }catch(err:any){
        res.status(err.code).end()
    }
}