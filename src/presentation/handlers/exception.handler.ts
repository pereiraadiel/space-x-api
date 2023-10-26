import { ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import { Response } from 'express';
import { AppException } from '../../domain/exceptions/app.exception';

@Catch(AppException)
export class ExceptionHandler implements ExceptionFilter {
  catch(exception: AppException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception.code;
    const message = exception.context[0].message
      ? exception.context[0].message
      : exception.message;

    response.status(status).json({
      message,
    });
  }
}
