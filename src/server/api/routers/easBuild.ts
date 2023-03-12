import { env } from "env.mjs";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { buildPayloadSchema, submitPayloadSchema } from "../types/payloads";
import { sendSlackMessage } from "../util/slack";

export const easBuildRouter = createTRPCRouter({
  buildPayload: publicProcedure
    .meta({ openapi: { method: "POST", path: "/build-payload" } })
    .input(buildPayloadSchema)
    .output(z.boolean())
    .mutation(async ({ input }) => {
      let message = `*${input.projectName}* ${input.platform} build *${input.status}*`;
      if (input.metadata) {
        message += `\n ${input.metadata.appVersion} (${input.metadata.appBuildVersion}, ${input.metadata.buildProfile})`;
      }
      const link = input.buildDetailsPageUrl ?? undefined;
      await sendSlackMessage({
        message,
        link,
        url: env.SLACK_WEBHOOK_MOUNTAIN_DEV_BUILDS,
      });

      return true;
    }),
  submitPayload: publicProcedure
    .meta({ openapi: { method: "POST", path: "/submit-payload" } })
    .input(submitPayloadSchema)
    .output(z.boolean())
    .mutation(async ({ input }) => {
      let message = `*${input.projectName}* ${input.platform} submission *${input.status}*`;
      const link = input.submissionDetailsPageUrl ?? undefined;
      await sendSlackMessage({
        message,
        link,
        url: env.SLACK_WEBHOOK_MOUNTAIN_DEV_BUILDS,
      });
      await sendSlackMessage({
        message,
        link,
        url: env.SLACK_WEBHOOK_HIVETRACKS_QA,
      });
      return true;
    }),
});
