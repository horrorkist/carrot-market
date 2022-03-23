import { NextApiRequest, NextApiResponse } from "next";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import twilio from "twilio";
import mail from "@sendgrid/mail";

const twilioClient = twilio(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
mail.setApiKey(process.env.SENDGRID_API_KEY!);

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { email, phone } = req.body;
  const to = email ? { email } : phone ? { phone } : null;
  if (!to) res.status(400).end();
  const user = await client.user.findFirst({
    where: {
      ...to,
    },
  });
  await client.token.deleteMany({
    where: {
      userId: user?.id,
    },
  });
  let payload;
  do {
    payload = Math.floor(100000 + Math.random() * 900000) + "";
  } while (
    await client.token.findUnique({
      where: {
        payload,
      },
    })
  );
  const token = await client.token.create({
    data: {
      payload,
      user: {
        connectOrCreate: {
          where: {
            ...to,
          },
          create: {
            name: "Anonymous",
            ...to,
          },
        },
      },
    },
  });
  // if (phone) {
  //   const message = await twilioClient.messages.create({
  //     messagingServiceSid: process.env.SERVICE_SID,
  //     to: process.env.PHONE_NUMBER!,
  //     body: `Your token is ${payload}.`,
  //   });
  // } else if (email) {
  //   const email = await mail.send({
  //     from: "horrorkist@gmail.com",
  //     to: "ganganli@naver.com",
  //     subject: "Your Carrot Market Token",
  //     text: `Your token is ${payload}`,
  //   });
  // }
  return res.json({
    ok: true,
    token,
  });
}

export default withHandler({ method: "POST", handler, isPrivate: false });
