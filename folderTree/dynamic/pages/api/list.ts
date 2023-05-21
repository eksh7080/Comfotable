import type { NextApiRequest, NextApiResponse } from 'next';
import ListAllItems from 'db/listAll.json';
import { ListItemAll } from 'types/list';

export default function handler(req: NextApiRequest, res: NextApiResponse<ListItemAll>) {
  res.status(200).json(ListAllItems);
}
