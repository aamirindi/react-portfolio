import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/a_logo.png'
import './index.scss'
import Typed from 'typed.js'
import Hero from '../../assets/images/aamir.jpg'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'Frontend Developer',
        'React developer',
        'Python developer',
        'HTML, CSS, & JS',
        'Machine Learning, Data science',
      ],
      typeSpeed: 50,
      backSpeed: 10,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  const nameArray = ['a', 'm', 'i', 'r']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="img-zone">
          <img src={Hero} alt="master-img" />
        </div>
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <br />
          <h2>
            <span ref={el}></span>....
          </h2>
          <div className="btn">
            <a
              href="https://drive.google.com/drive/u/1/folders/1FWFbyVW3R2vdAdIJ0YmTMF2S3F1_jf9h"
              download
              className="flat-button"
            >
              DOWNLOAD CV
            </a>
            <Link to="/contact" className="flat-button">
              CONTACT ME
            </Link>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
