import { PrismaClient } from "@prisma/client";

declare global {
  /* eslint-disable no-var */
  var prisma: PrismaClient | undefined;
  /* eslint-enable no-var */
}

const client = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "stdout",
      level: "error",
    },
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "stdout",
      level: "warn",
    },
  ],
});

const LOGGING = process.env.NODE_ENV !== "production";
if (LOGGING) {
  client.$on("query", (e) => {
    console.log("Query: " + e.query);
    console.log("Params: " + e.params);
    console.log("Duration: " + e.duration + "ms");
  });
}

export const prisma = global.prisma || client;

if (process.env.NODE_ENV !== "production") {
  global.prisma = prisma;
}
