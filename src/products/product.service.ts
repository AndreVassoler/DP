import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto'; 
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productkModel: Model<Product>) {}

  create( createProductDto: CreateProductDto) {
    const createdProduct = this.productkModel.create(createProductDto);
    return createdProduct;
  }

 

  findAll() {
    return this.productkModel.find();
  }

 
}
