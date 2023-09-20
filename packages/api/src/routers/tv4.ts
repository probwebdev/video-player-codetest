import { z } from 'zod';

import { publicProcedure, createTRPCRouter } from '../trpc';

export const tv4Router = createTRPCRouter({
  showcase: publicProcedure
    .input(
      z.optional(
        z.object({
          limit: z.number(),
          offset: z.number(),
        })
      )
    )
    .query(() => {
      return { message: 'hello' };
    }),
});
