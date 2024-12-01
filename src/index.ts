import { Context, Telegraf } from "telegraf";
import { VercelRequest, VercelResponse } from "@vercel/node";
import process from "node:process";

import { development, production } from "./core";
import { debug } from "./utils/debug";

const BOT_TOKEN = process.env.BOT_TOKEN || "";
const ENVIRONMENT = process.env.NODE_ENV || "";

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not set.");
}
if (!ENVIRONMENT) {
  throw new Error("ENVIRONMENT is not set.");
}

const bot = new Telegraf<Context>(BOT_TOKEN);

if (ENVIRONMENT !== "production") {
  bot.use(Telegraf.log());
}

// * Add Handlers *

import {
  helpCommandHandler,
  privacyCommandHandler,
  startCommandHandler,
} from "./commands";

bot.command(["start"], startCommandHandler);
bot.command(["help"], helpCommandHandler);
bot.command(["privacy"], privacyCommandHandler);

// *********** //

bot.catch((err, ctx) => {
  debug(`Ooops, encountered an error for ${ctx.updateType}`, err);
});

export const startVercel = async (req: VercelRequest, res: VercelResponse) => {
  await production(req, res, bot);
};

ENVIRONMENT !== "production" && development(bot);
