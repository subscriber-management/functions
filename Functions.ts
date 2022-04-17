import { Middleware } from 'https://deno.land/x/oak@v10.5.1/middleware.ts';

export const resolvedRepoUrl = (identifier: string) => {
  if (identifier.indexOf('github:') === 0) {
    const ref = identifier.split('github:')[1];
    return `https://raw.githubusercontent.com/${ref}`;
  } else {
    return identifier;
  }
};

export const executeFunction: Middleware = async ({ request, response }) => {
  const { module, args } = await request.body({ type: 'json' }).value;
  const importedModule = await import(resolvedRepoUrl(module));

  if (importedModule.default) {
    const func = importedModule.default;
    response.body = {
      data: await func(args),
    };
  }
};
