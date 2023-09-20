import { tv4Router } from './routers/tv4';
import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({
  tv4: tv4Router,
});

export type AppRouter = typeof appRouter;
export type * from './routers/tv4.types';
