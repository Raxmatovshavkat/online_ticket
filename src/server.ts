import express from "express"
// import models from "./model/indexModel.js"
import dotenv from "dotenv"
import router from "./routes/index.routes"

dotenv.config()


const app = express()
app.use(express.json())
app.use("/api", router)
const start = async () => {
    try {
        // await sequelize.authenticate();
        // await models.sequelize.sync();

        const port = process.env.PORT;
        app.listen(port, () => console.log(`Server is running on port ${port}`));

    } catch (error) {
        console.log(error instanceof Error, 'xatolik');

    }

}

start()