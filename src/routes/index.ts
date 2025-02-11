import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./table-routes";
import { Router } from "express";

const routes = Router();

routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);

export { routes };
