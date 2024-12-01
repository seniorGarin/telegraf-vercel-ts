import { VercelRequest, VercelResponse } from "@vercel/node";
import { startVercel } from "../src";

export default async function handle(req: VercelRequest, res: VercelResponse) {
  try {
    await startVercel(req, res);
  } catch (_error) {
    res.statusCode = 500;
    res.setHeader("Content-Type", "text/html");
    res.end("<h1>Server Error</h1><p>Sorry, Something Went Wrong.</p>");
    if (_error instanceof Error) {
      console.error(_error.message);
    }
  }
}
