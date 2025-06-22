import { Router } from "express";
import {getLoginAuth, postLoginAuth, homePageRoute} from "../controllers/auth.js"

const router = Router()


router.route("/login").get(getLoginAuth).post(postLoginAuth);

router.route("/").get(homePageRoute)


export {router as authRoute}