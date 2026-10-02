import { Request, Response, NextFunction } from "express";
import fs from "fs";

export const pingHandler = async (req:Request,res:Response,next:NextFunction) : Promise<void>=>{
        fs.readFile("sample",(err,data)=>{
            if(err){
                throw new Error("something went wrongwhen we were reading the file");
                next(err);  
            } 
            //console.log(data.toString());
        })
}