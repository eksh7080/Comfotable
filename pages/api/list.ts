import type { NextApiRequest, NextApiResponse } from 'next'
import ListData from '../../db/list.json'

type ListData = {
  data: string[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListData>
) {
  res.status(200).json(ListData)
}
