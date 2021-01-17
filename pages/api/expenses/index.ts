import type { NextApiRequest, NextApiResponse } from 'next'

import { prisma } from '../../../lib/prismaClient'

async function getExpenses(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (!req.query.userId) {
    res.status(404).json({
      status: '404',
      message: 'Record not found in the database',
    })
  }

  const expenses = await prisma.expense.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    where: {
      userId: {
        equals: req.body.userId,
      },
    },
  })

  res.status(200).json(expenses)
}

export default getExpenses
