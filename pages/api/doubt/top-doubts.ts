import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../../lib/mongodb"


export default async function Users(req:NextApiRequest, res:NextApiResponse) {

    if (req.method === 'GET') {
        const client = await clientPromise
        const db = client.db("clomira")
        const data = await db.collection("doubts").find({}).toArray()
        
        const response = JSON.parse(JSON.stringify(data))
        res.json(response)
        
    } else {
        res.json({message:"This request is not allowed",user:false})
    }
}