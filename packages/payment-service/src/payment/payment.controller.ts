import { Body, Controller, Delete, Param, Post } from "@nestjs/common";
import { PaymentService } from "./payment.service";

import { UpdatePaymentDto, CreatePaymentDto } from "@shared/dto";

@Controller("payment")
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post()
  create(@Body() createPaymentDto: CreatePaymentDto) {
    return this.paymentService.create(createPaymentDto);
  }

  @Post(":id")
  update(@Param("id") id: number, @Body() updatePaymentDto: UpdatePaymentDto) {
    return this.paymentService.update(id, updatePaymentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.paymentService.remove(id);
  }
}
