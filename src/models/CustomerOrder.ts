import { Pizza } from "./Pizza";

export interface CustomerOrder {
  id: string;
  customer: string;
  phone: string;
  address: string;
  priority: boolean;
  status: string;
  estimatedDelivery: string;
  cart: Pizza[];
  position: string;
  orderPrice: number;
  priorityPrice: number;
}
