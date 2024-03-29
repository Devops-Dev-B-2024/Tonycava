import express from "express";
import { PrismaClient } from "@prisma/client";

const app = express();

const PORT = process.env.PORT || 3000

const prisma = new PrismaClient()

app.get("/", async (req, res) => {
    const user = await prisma.user.create({
        data: {username: (Math.random() * 100).toString()}
    })
    console.log(user)
    res.send({ user })
})

app.listen(PORT, () => {
    console.log(`Server listening on : http://localhost:${PORT}`)
})