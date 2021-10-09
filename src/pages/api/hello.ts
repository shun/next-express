// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createElement } from "react";
import type { NextApiRequest, NextApiResponse } from 'next'
import { renderToStaticMarkup } from "react-dom/server";
import { Users } from "./Users";

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const html = renderToStaticMarkup(createElement(Users));
  console.log("html", html);
  res.status(200).json({ name: 'John Doe1' })
}
