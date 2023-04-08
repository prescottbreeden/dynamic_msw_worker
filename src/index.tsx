import React from 'react'
import ReactDOM from 'react-dom'
const { big_handlers, small_handlers } = require('./mocks/handlers')
const { worker } = require('./mocks/browser')

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

const fetchData = async () => {
  return fetch('http://localhost:8080/data')
    .then((response) => response.json())
    .catch((err) => {
      console.log('there was an error fetching: ', err)
    })
}

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

  return (
    <>
      <div>
        <h1>dynamic msw app</h1>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            onClick={() => setHandlers('small')}
            checked={handlers === 'small'}
          />
          small data
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            onClick={() => setHandlers('big')}
            checked={handlers === 'big'}
          />
          big data
        </label>
      </div>
      <div>
        {handlers === 'big' ? (
          <h2>lets mock some big data!</h2>
        ) : (
          <h2>lets mock some small data!</h2>
        )}
      </div>
      <div>
        <button
          style={{
            padding: '.5rem 1rem',
            backgroundColor: 'steelblue',
            color: 'white',
            borderRadius: '4px',
            border: 'none',
            fontSize: '1rem',
          }}
          onClick={() => fetchEm()}
        >
          Fetch Data
        </button>
        <h3>Data</h3>
        {data.map((ele) => (
          <p>{ele.name}</p>
        ))}
      </div>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
