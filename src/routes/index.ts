import { tablesSessionsRoutes } from "./tables-sessions-routes";
import { productsRoutes } from "./products-routes";
import { tablesRoutes } from "./table-routes";
import { ordersRoutes } from "./orders-routes";
import { Router } from "express";

const routes = Router();

routes.use("/tables-sessions", tablesSessionsRoutes);
routes.use("/products", productsRoutes);
routes.use("/tables", tablesRoutes);
routes.use("/orders", ordersRoutes);

export { routes };
