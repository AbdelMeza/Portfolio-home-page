import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import AboutPage from './Pages/AboutPage/AboutPage'
import Menu from './Components/Menu/Menu'
import { createHashRouter, RouterProvider, Outlet } from 'react-router-dom'
import Lenis from "@studio-freight/lenis"
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'
import ErrorPage from './Pages/ErrorPage/ErrorPage'

function Layout({ ...Datas }) {
  return (
    <>
      <Outlet />
      <Menu menuStatu={Datas.menuStatu} menuState={Datas.menuState} localTime={Datas.localTime} />
      <LoadingScreen setLoadingState={Datas.setLoadingState} loadingState={Datas.loadingState}/>
    </>
  )
}

export default function App() {
  const getTime = () => {
    const time = new Date()
    const options = { timeZone: 'Africa/Algiers', hour: '2-digit', minute: '2-digit', second: '2-digit' }
    return time.toLocaleTimeString('fr-DZ', options)
  }

  const [localTime, setLocalTime] = useState(getTime())
  const [menuState, setMenuStatu] = useState(false)
  const [loadingState, setLoadingState] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => setLocalTime(getTime()), 1000)
    const lenis = new Lenis({ duration: 0.8, smoothWheel: true, smoothTouch: false })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      clearInterval(interval)
      lenis.destroy()
    }
  }, [])

  const menuStatu = (menuState) => setMenuStatu(menuState)

  const router = createHashRouter([
    {
      path: '/',
      element: <Layout menuStatu={menuStatu} menuState={menuState} localTime={localTime} setLoadingState={setLoadingState} loadingState={loadingState}/>,
      children: [
        { index: true, element: <HomePage localTime={localTime} menuStatu={menuStatu} menuState={menuState}/> },
        { path: 'about', element: <AboutPage localTime={localTime} menuStatu={menuStatu} menuState={menuState} setLoadingState={setLoadingState}/> },
        { path: '*', element: <ErrorPage setLoadingState={setLoadingState} loadingState={loadingState}/> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
