import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Redbank from '../../assets/images/redbank.jpg'
import RedbankL from '../../assets/images/RedbankL.jpg'
import BlogL from '../../assets/images/BlogL.jpg'
import Blog from '../../assets/images/Blog.jpg'

const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container projects">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="bottom">
          <a
            href="https://sparkly-biscotti-22bb7a.netlify.app"
            alt="Mythrill"
            target="_blank"
          >
            <div className="card">
              <h3>Redbank</h3>
              <div className="wrapper">
                <img src={RedbankL} className="cover-image" />
              </div>
              <img src={Redbank} className="character" />
            </div>
          </a>
          <a
            href="https://fastidious-lamington-581434.netlify.app/"
            alt="Mythrill"
            target="_blank"
          >
            <div className="card">
              <h3>Blog</h3>
              <div className="wrapper">
                <img src={BlogL} className="cover-image" />
              </div>
              <img src={Blog} className="character" />
            </div>
          </a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
