import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "../../../libs/server/withApiSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const products = await client.product.findMany({
      include: {
        _count: {
          select: {
            favs: true,
          },
        },
      },
    });
    return res.json({
      ok: true,
      products,
    });
  }

  if (req.method === "POST") {
    const {
      body: { name, price, description },
      session: { user },
    } = req;
    const product = await client.product.create({
      data: {
        name,
        price: +price,
        description,
        image: "xx",
        user: {
          connect: {
            id: user?.id,
          },
        },
      },
    });
    return res.json({
      ok: true,
      product,
    });
  }
}
export default withApiSession(
  withHandler({ methods: ["POST", "GET"], handler })
);
