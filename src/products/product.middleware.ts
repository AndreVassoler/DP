import { Injectable, NestMiddleware, HttpStatus, Inject } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product";
import { AppError } from "../utils/error.exception";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";


@Injectable()
export class ProductMiddleware implements NestMiddleware {
    async use(req: any, res: any, next: () => void) {
        let dto: CreateProductDto | UpdateProductDto;

        if (req.method === 'POST') {
            dto = plainToClass(CreateProductDto, req.body);
        } else if (req.method === 'PUT' || req.method === 'PATCH') {
            dto = plainToClass(UpdateProductDto, req.body);
        }

        if (dto) {
            const errors = await validate(dto);
            if (errors.length > 0) {
                throw new AppError({
                    id: 'validation_error',
                    message: 'Validation failed',
                    status: HttpStatus.BAD_REQUEST,
                    errors: errors,
                });
            }

            if (req.body.value) {
                req.body.value = req.body.value * 1.25;
            }
        }
        next();
    }
}
    




