import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const alertRouter = createTRPCRouter({
  getHook: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        message: `From T3 app: The webhook is ${input.text}`,
      };
    }),
});
