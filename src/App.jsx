import { useEffect, useState } from 'react'
import './App.css'
import BodyContent from './Components/BodyContent/BodyContent.jsx'

export default function App() {
  const getTime = () => {
    const time = new Date()
    const options = {
      timeZone: 'Africa/Algiers',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }

    const timeInAlgeria = time.toLocaleTimeString('fr-DZ', options)
    return timeInAlgeria
  }

  const [localTime, setLocalTime] = useState(getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setLocalTime(getTime())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const [statu, setStatu] = useState(false)

  const menuStatu = (statu) => {
    setStatu(statu)
  }

  return (

    <>
      <BodyContent localTime={localTime} menuStatu={menuStatu} statu={statu} />
    </>
  )
}
