
import { Router, Request, Response } from "express";
import accountController from "../controllers/accountController";

const router = Router();

router.post("/", (req: Request, res: Response) => accountController.createAccount(req, res));
router.get("/:id", (req: Request, res: Response) => accountController.getAccountDetails(req, res));
router.post("/:id/increment", (req: Request, res: Response) => accountController.incrementBalance(req, res));
router.post("/:id/decrement", (req: Request, res: Response) => accountController.decrementBalance(req, res));

export default router;
