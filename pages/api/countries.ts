import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  ok: Boolean;
  msg: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({
    ok: true,
    msg: 'Request made correctly',
  });
}
