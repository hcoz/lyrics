import { ServerRequest } from './depts.ts';

export default async function (req: ServerRequest) {
	req.respond({ body: `Hello, from Deno v${Deno.version.deno}!` });
};
