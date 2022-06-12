import type { NextApiRequest, NextApiResponse } from "next";

const testing = () => {
  return "testing";
};

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ message: "Hello from Next.js!" });
};

export { testing };
export default handler;
