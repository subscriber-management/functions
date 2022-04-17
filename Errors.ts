import {
  isHttpError,
  Status,
} from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import { Middleware } from 'https://deno.land/x/oak@v10.5.1/middleware.ts';

const handleErrors: Middleware = async ({ response }, next) => {
  try {
    await next();
  } catch (error) {
    if (isHttpError(error)) {
      switch (error.status) {
        case Status.NotFound:
          response.body = {
            error: 'not found',
            status: error.status,
          };
          break;
        default:
          break;
      }
    } else {
      throw error;
    }
  }
};

export default handleErrors;