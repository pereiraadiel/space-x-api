import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  BadRequestException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(BadRequestException)
export class ValidationExceptionHandler implements ExceptionFilter {
  catch(exception: BadRequestException | any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const message = exception.response
      ? exception.response.message
      : exception.message;

    response.status(400).json({
      message,
    });
  }
}
