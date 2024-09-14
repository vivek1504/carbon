import express from "express"
import cors from "cors"
import { userRouter } from "./Routes/userRoutes"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)

app.listen(3001, () => {
    console.log("Server is running on port 3000")
})