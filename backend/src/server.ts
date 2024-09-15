import express from "express"
import cors from "cors"
import { userRouter } from "./Routes/userRoutes"
import { tokenRouter } from "./Routes/tokenRoutes"
import { projectRouter } from "./Routes/projectRoutes"
import { transactionRouter } from "./Routes/transactionRoutes"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/tokens", tokenRouter)
app.use("/project", projectRouter)
app.use("/transactions", transactionRouter)

app.listen(3001, () => {
    console.log("Server is running on port 3000")
})