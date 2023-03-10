import axios from "axios";
import { env } from "env.mjs";

export const sendSlackMessage = async (options: {
  message: string;
  link?: string;
}) => {
  const link = options.link ? `\n<${options.link}|link>` : "";
  const url = env.SLACK_WEBHOOK;
  return axios.post(url, {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `${options.message}${link}`,
        },
      },
    ],
  });
};
