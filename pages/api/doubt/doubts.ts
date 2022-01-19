import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../../lib/mongodb"


export default async function Users(req:NextApiRequest, res:NextApiResponse) {

    if (req.method === 'POST') {
        const client = await clientPromise
        const db = client.db("clomira")
        const data = await db.collection("doubts").insertOne({
           title: req.body.title,
            body: req.body.body,
            tags:req.body.tags
        })
        console.log("Doubt Posted")
        res.json({ doubtPosted: req.body })

    } else {
        res.json({message:"This request is not allowed",user:false})
    }
}