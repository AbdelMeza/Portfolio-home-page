import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import Menu from './Components/Menu/Menu'
import { createHashRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const getTime = () => {
    const time = new Date()
    const options = { timeZone: 'Africa/Algiers', hour: '2-digit', minute: '2-digit', second: '2-digit' }

    return time.toLocaleTimeString('fr-DZ', options)
  }

  const [localTime, setLocalTime] = useState(getTime())

  useEffect(() => {
    const interval = setInterval(() => setLocalTime(getTime()), 1000)

    return () => clearInterval(interval)
  }, [])

  const [statu, setStatu] = useState(false)

  const menuStatu = (statu) => {
    setStatu(statu)
  }

  const homePage = <HomePage localTime={localTime} menuStatu={menuStatu} statu={statu} />
  const aboutPage = <AboutPage localTime={localTime} menuStatu={menuStatu} statu={statu} />
  const router = createHashRouter([
    { path: '/', element: homePage },
    { path: '/about', element: aboutPage }, {
      basename: '/Portfolio-home-page',
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
      <Menu menuStatu={menuStatu} statu={statu} localTime={localTime} />
    </>
  )
}

