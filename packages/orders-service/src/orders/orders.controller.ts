import { Controller } from "@nestjs/common";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { OrdersService } from "./orders.service";

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @MessagePattern("createOrder")
  create(@Payload() createOrderDto: string) {
    return this.ordersService.create(createOrderDto);
  }

  @MessagePattern("findAllOrders")
  findAll() {
    return this.ordersService.findAll();
  }
}
