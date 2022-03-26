import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withApiSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      body: { question },
      session: { user },
    } = req;

    const post = await client.post.create({
      data: {
        user: {
          connect: {
            id: user?.id,
          },
        },
        question,
      },
    });

    return res.json({
      ok: true,
      post,
    });
  }
  if (req.method === "GET") {
    const posts = await client.post.findMany({
      include: {
        user: {
          select: {
            id: true,
            name: true,
            avatar: true,
          },
        },
        _count: {
          select: {
            wonderings: true,
            answers: true,
          },
        },
      },
    });

    return res.json({
      ok: true,
      posts,
    });
  }
}
export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
