// Server side API endpoint
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async () => {
    return new Response("Hello from the demo API");
};