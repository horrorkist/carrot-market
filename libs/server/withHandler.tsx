import { NextApiRequest, NextApiResponse } from "next";

type method = "GET" | "POST" | "DELETE";

interface ConfigType {
  methods: method[];
  handler: (req: NextApiRequest, res: NextApiResponse) => void;
  isPrivate?: boolean;
}

export interface ResponseType {
  ok: boolean;
  [key: string]: any;
}

export default function withHandler({
  methods,
  handler,
  isPrivate = true,
}: ConfigType) {
  return async function (
    req: NextApiRequest,
    res: NextApiResponse
  ): Promise<any> {
    if (req.method && !methods.includes(req.method as any)) {
      return res.status(405).end();
    }
    if (isPrivate && !req.session.user) {
      return res.status(401).json({ ok: false });
    }
    try {
      await handler(req, res);
    } catch (error) {
      return res.status(500).json({ error });
    }
  };
}
