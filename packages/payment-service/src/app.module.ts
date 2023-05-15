import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { PaymentModule } from "./payment/payment.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [".env", `.env.${process.env.STAGE}`],
      isGlobal: true,
    }),
    PaymentModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
