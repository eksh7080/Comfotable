import type { NextApiRequest, NextApiResponse } from 'next';
import ListAllItems from 'db/listAll.json';
import { ListAll } from 'types/list';

export default function handler(req: NextApiRequest, res: NextApiResponse<ListAll>) {
  res.status(200).json(ListAllItems);
}
