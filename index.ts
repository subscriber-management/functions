import {
  Application,
} from 'https://deno.land/x/oak@v10.5.1/mod.ts';
import handleErrors from './Errors.ts';
import router from './Routes.ts';

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.use(handleErrors);
await app.listen({ port: 8989 });
