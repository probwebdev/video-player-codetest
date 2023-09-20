import { z } from 'zod';

import { publicProcedure, createTRPCRouter } from '../trpc';

import type { TV4ShowcaseData } from './tv4.types';

export const TV4_API_URL =
  'https://gist.githubusercontent.com/jocke138/056a510a33af4d87f1b39d88a6f9dc67/raw/6fe88083f996162a5c335bd4ec7278cdcf2eef78/movies.json';

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
    .query(async () => {
      const response = await fetch(TV4_API_URL);
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const data: TV4ShowcaseData = await response.json();

      return data;
    }),
});
