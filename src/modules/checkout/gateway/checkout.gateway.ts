import { Order } from "sequelize";

export interface CheckoutGateway {
    addOrder(order: Order): Promise<void>;
    findOrder(id: string): Promise<Order | null>;
}