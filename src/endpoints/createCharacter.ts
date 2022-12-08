import {Request,Response} from 'express'
import connection from '../connection'



export default async function createCharacter(
    req: Request,
    res: Response
):Promise<void>{
    const{name,gender,description} = req.body
    try{
        await connection("character")
            .insert({name,gender,description})

        res.status(200).end()

    }catch(err){
        res.status(500).end()
    }
    
    
}