import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar/'
import './index.scss'
import { useState, useEffect } from 'react'

const Layout = () => {
  const [posX, setPosX] = useState(0)
  const [posY, setPosY] = useState(0)

  useEffect(() => {
    const cursorDot = document.querySelector('[data-cursor-dot]')
    const cursorOutline = document.querySelector('[data-cursor-outline]')

    const handleMouseMove = (e) => {
      const newX = e.clientX
      const newY = e.clientY

      setPosX(newX)
      setPosY(newY)

      cursorOutline.animate(
        [
          { left: `${posX}px`, top: `${posY}px` },
          { left: `${newX}px`, top: `${newY}px` },
        ],
        { duration: 500, fill: 'forwards' }
      )
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [posX, posY])
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-html">
          &lt;html&gt;
          <br />
          <span className="top-tags">&lt;body&gt;</span>
        </span>

        <Outlet />
        <span className="tags bottom-tags">
          &lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
      <div
        className="cursor-dot"
        data-cursor-dot
        style={{ left: `${posX}px`, top: `${posY}px` }}
      ></div>
      <div
        className="cursor-outline"
        data-cursor-outline
        style={{ left: `${posX}px`, top: `${posY}px` }}
      ></div>
    </div>
  )
}

export default Layout
