import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "../../../libs/server/withApiSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const profile = await client.user.findUnique({
    where: {
      id: req.session.user?.id,
    },
  });
  return res.json({
    ok: true,
    profile,
  });
}
export default withApiSession(withHandler({ method: "GET", handler }));
