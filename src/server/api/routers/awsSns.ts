import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const awsSnsRouter = createTRPCRouter({
  miscPayload: publicProcedure
    .meta({ openapi: { method: "POST", path: "/aws-sns-payload" } })
    .input(z.any())
    .output(z.any())
    .mutation(({ input }) => {
      // We will configure eas (through the eas GUI) to send a POST request to this endpoint
      // This is where we will process that payload
      // If success return true
      console.log("got payload!", input);

      return input;
    }),
});
