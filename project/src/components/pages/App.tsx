import React, { useEffect, useState } from 'react'
import logo from '../../logo.svg'
import '../../App.css'
import { Link } from 'react-router-dom'

const URL = process.env.REACT_APP_SURV ?? 'https://sixcities.navfront.ru/api/'
console.log('env react url = ', process.env.REACT_APP_SURV)

async function getClicks (): Promise<Click[]> {
  const res = await fetch(`${URL}users/clicks`)
  const clicks = await res.json()
  return clicks
}

interface Click {
  _id: string
  clickDate: string
}

function App (): JSX.Element {
  const [clicks, setClicks] = useState<Click[]>([])

  useEffect(() => {
    void getClicks().then((r) => {
      setClicks([...clicks, ...r])
    })
  }, [setClicks])

  const clickHandler = (): void => {
    fetch(`${URL}users/click`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json;charset=UTF-8'
      },
      body: JSON.stringify({ clickDate: Date.now() })
    }).then(async res => await res.json()).then(data => {
      console.log(data)
      setClicks([...clicks, data])
    }).catch(e => console.log(e)
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/admin"><img src={logo} className="App-logo" alt="logo" /></Link>
        <h1>My db knows {clicks.length} clicks!</h1>
        <p style={{ color: 'lightblue' }}>Last clicks:</p>
        {clicks.slice(clicks.length - 5, clicks.length).map((cl) => {
          const dateText = new Date(Number(cl.clickDate))
          return <p key={cl._id}>{String(dateText.toLocaleString()) }</p>
        })}
        <a
          className="App-link"
          href="#"
          onClick={clickHandler}
          rel="noopener noreferrer"
        >
          Make a new click
        </a>
      </header>
    </div>
  )
}

export default App
