# Dynamic MSW handlers

Naive POC to update MSW worker on the fly to mock different data dynamically.

## Handlers

```js
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
        ],
      })
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
        ],
      })
    )
  }),
]
```

## Basic Implementation

```tsx
const App = () => {
  const [handlers, setHandlers] = React.useState('small')
  const [data, setData] = React.useState([])

  const fetchEm = async () => {
    const res = await fetchData()
    setData(res.payload)
  }

  React.useEffect(() => {
    if (handlers === 'small') {
      worker.resetHandlers(...small_handlers)
    }
    else if (handlers === 'big'){
      worker.resetHandlers(...big_handlers)
    }
  }, [handlers, worker])

```
