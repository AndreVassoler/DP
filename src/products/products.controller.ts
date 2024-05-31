import { Controller, Get, Post, Body, Param, Delete } from "@nestjs/common"; 
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productService: ProductService) {}

    @Post()
    create(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }

    @Get()
    findAll(@Body() createProductDto: CreateProductDto) {
        return this.productService.create(createProductDto);
    }
}
   