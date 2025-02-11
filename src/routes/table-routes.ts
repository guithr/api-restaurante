import { TablesContoller } from "@/controllers/tables-controller";
import { Router } from "express";

const tablesRoutes = Router();

const tablesContoller = new TablesContoller();

tablesRoutes.get("/", tablesContoller.index);

export { tablesRoutes };
