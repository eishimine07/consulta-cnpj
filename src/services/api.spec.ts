import { AxiosError, HttpStatusCode } from 'axios';
import { getErrorResponse } from '@/services/api';

describe('getErrorResponse', () => {
  it('should return the error message from AxiosError with a single message', () => {
    const error = {
      isAxiosError: true,
      response: {
        status: HttpStatusCode.BadRequest,
        data: { message: 'Bad Request' },
      },
    } as AxiosError<{ message: string }>;

    const result = getErrorResponse(error);

    expect(result).toEqual({
      error: 'Bad Request',
      status: HttpStatusCode.BadRequest,
    });
  });

  it('should return the first error message from AxiosError with multiple errors', () => {
    const error = {
      isAxiosError: true,
      response: {
        status: HttpStatusCode.UnprocessableEntity,
        data: { errors: [{ message: 'Invalid email' }, { message: 'Invalid name' }] },
      },
    } as AxiosError<{ errors: { message: string }[] }>;

    const result = getErrorResponse(error);

    expect(result).toEqual({
      error: 'Invalid email',
      status: HttpStatusCode.UnprocessableEntity,
    });
  });

  it('should return only the status if no error message is present in AxiosError', () => {
    const error = {
      isAxiosError: true,
      response: {
        status: HttpStatusCode.NotFound,
        data: {},
      },
    } as AxiosError;

    const result = getErrorResponse(error);

    expect(result).toEqual({
      status: HttpStatusCode.NotFound,
    });
  });

  it('should return InternalServerError status for non-AxiosError', () => {
    const error = new Error('test');

    const result = getErrorResponse(error);

    expect(result).toEqual({
      status: HttpStatusCode.InternalServerError,
    });
  });
});
