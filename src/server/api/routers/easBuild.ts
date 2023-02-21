import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { buildPayloadSchema, submitPayloadSchema } from "../types/payloads";

export const easBuildRouter = createTRPCRouter({
  buildPayload: publicProcedure
    .meta({ openapi: { method: "POST", path: "/build-payload" } })
    .input(buildPayloadSchema)
    .output(z.boolean())
    .mutation(({ input }) => {
      // We will configure eas (through the eas GUI) to send a POST request to this endpoint
      // This is where we will process that payload
      // If success return true
      console.log("got payload!", input);

      return false;
    }),
  submitPayload: publicProcedure
    .meta({ openapi: { method: "POST", path: "/submitPayload" } })
    .input(submitPayloadSchema)
    .output(z.boolean())
    .mutation(({ input }) => {
      // We will configure eas (through the eas GUI) to send a POST request to this endpoint
      // This is where we will process that payload
      // If success return true
      console.log();

      return false;
    }),
});
