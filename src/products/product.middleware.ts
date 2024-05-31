import { Injectable, NestMiddleware, HttpStatus, Inject } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product";

@Injectable()
export class ProductMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: () => void) {
        const { body } = req;
        const { name, price } = body;
        if (!name || !price) {
            res.status(HttpStatus.BAD_REQUEST).send({
                message: 'Name and price are required'
            });
        } else {
            next();
        }
    }
}







