import type { NextApiRequest, NextApiResponse } from 'next';
import ListData from '../../db/list.json';
import { ListItems } from '@/types/list';

export default function handler(req: NextApiRequest, res: NextApiResponse<ListItems[]>) {
  res.status(200).json(ListData);
}
