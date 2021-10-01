import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router
  .route("/isAlive")
  .head((req: Request, res: Response, next: NextFunction) => {
    res.status(200).end();
  })
  .get((req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({ status: "OK" });
  })
;
export default router;
