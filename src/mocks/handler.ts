import { getContentMock } from '@/models/generated';
import { rest } from 'msw';

export const handlers = [
  rest.get('/api/content', (_req, res, ctx) => {
    return res(
      ctx.delay(50),
      ctx.status(200),
      ctx.json(getContentMock())
    )
  })
];
