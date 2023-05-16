import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./schemas/product.schema";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModule: Model<Product>
  ) {}

  create(createProductDto: string) {
    return "This action adds a new product" + createProductDto;
  }

  findAll() {
    return `This action returns all products`;
  }
}
