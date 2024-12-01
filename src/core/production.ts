import { VercelRequest, VercelResponse } from "@vercel/node";
import { Context, Telegraf } from "telegraf";
import { Update } from "telegraf/typings/core/types/typegram";

import { debug } from "../utils/debug";

const production = async (
  req: VercelRequest,
  res: VercelResponse,
  bot: Telegraf<Context>,
) => {
  debug("Bot runs in production mode");

  if (req.method === "POST") {
    await bot.handleUpdate(req.body as unknown as Update, res);
  } else {
    res.status(200).json("Listening to bot events...");
  }
  debug(`starting webhook . . .`);
};
export { production };
