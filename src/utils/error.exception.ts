import { HttpException } from '@nestjs/common';
import { Logger } from './logger';

interface ErrorOptions {
    id: string;
    message: string;
    status: number;
    errors?: any;
    }

export class AppError extends HttpException {
    constructor(options: ErrorOptions) {
        super(options, options.status);
        Logger.error(options.message, null, 'AppError');
    }
}