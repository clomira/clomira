import { NextApiRequest, NextApiResponse } from "next"
import clientPromise from "../../../lib/mongodb"


export default async function Users(req:NextApiRequest, res:NextApiResponse) {
    if (req.method === 'POST') {
        const client = await clientPromise
        const db = client.db("clomira")

        const data = await db.collection("users").insertOne({
            user_name: req.body.user_name,
            user_pass: req.body.user_pass,
            user_email:req.body.user_email
        })
        res.json({ userDetails: req.body })

    } else {
        res.json({message:"This request is not allowed"})
    }
}