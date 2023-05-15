import { Inject, Injectable } from "@nestjs/common";
import { ClientKafka } from "@nestjs/microservices";

import { UpdatePaymentDto, CreatePaymentDto } from "@shared/dto";

@Injectable()
export class PaymentService {
  /*   constructor(
    @Inject("PAYMENT_MICROSERVICE") private readonly authClient: ClientKafka
  ) {} */

  create(createPaymentDto: CreatePaymentDto) {
    // this.authClient.send("create_user", JSON.stringify(createPaymentDto));
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    // this.authClient.emit("create_user", JSON.stringify(updatePaymentDto));
  }

  remove(id: number) {
    // this.authClient.emit("delete_user", JSON.stringify(id));
  }
}
