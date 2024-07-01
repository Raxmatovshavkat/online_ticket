import userRouter from "./user.routes.js"
import favoriteRouter from "./favorite.routes.js"
import ticketRouter from "./ticket.routes.js"
import orderRouter from "./orders.routes.js"

import { Router } from "express"
const router = Router()

router.use("/user", userRouter)
router.use("/favorite", favoriteRouter)
router.use("/ticket", ticketRouter)
router.use("/order", orderRouter)
export default router