import { rest } from 'msw'

export const big_handlers = [
  rest.get('/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        payload: [
          { name: 'bob ross' },
          { name: 'dingo' },
          { name: 'flamingo' },
          { name: 'bob ross' },
          { name: 'dingo' },
          { name: 'flamingo' },
          { name: 'bob ross' },
          { name: 'dingo' },
          { name: 'flamingo' },
          { name: 'bob ross' },
          { name: 'dingo' },
          { name: 'flamingo' },
        ]
      }),
    )
  }),
]
export const small_handlers = [
  rest.get('/data', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        payload: [
          { name: 'bob ross' },
          { name: 'dingo' },
          { name: 'flamingo' },
        ]
      }),
    )
  }),
]
