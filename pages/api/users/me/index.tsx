import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withApiSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
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
  if (req.method === "POST") {
    const {
      session: { user },
      body: { email, phone },
    } = req;
    if (email) {
      const alreadyExists = await client.user.findUnique({
        where: {
          email,
        },
        select: {
          id: true,
        },
      });
      if (alreadyExists) {
        if (alreadyExists.id !== user?.id) {
          return res.json({
            ok: false,
            error: "This email is already in use.",
          });
        }
      } else {
        await client.user.update({
          where: {
            id: user?.id,
          },
          data: {
            email,
          },
        });
      }
    }
    if (phone) {
      const alreadyExists = await client.user.findUnique({
        where: {
          phone,
        },
        select: {
          id: true,
        },
      });
      if (alreadyExists) {
        if (alreadyExists.id !== user?.id) {
          return res.json({
            ok: false,
            error: "This phone number is already in use.",
          });
        }
      } else {
        await client.user.update({
          where: {
            id: user?.id,
          },
          data: {
            phone,
          },
        });
      }
    }
    return res.json({
      ok: true,
    });
  }
}
export default withApiSession(
  withHandler({ methods: ["GET", "POST"], handler })
);
