import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import RedBank from '../../assets/images/redbanks.jpg'
import Blog from '../../assets/images/Blogs.jpg'

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
          <div className="details">
            <div className="article">
              <img src={RedBank} alt="Project 1" className="project-img" />
            </div>
            <h2 className="project-title">RedBank</h2>
            <div className="btn-container">
              <button
                className="btn btn-1"
                onClick={() =>
                  window.open('https://github.com/aamirindi/redbank', '_blank')
                }
              >
                Github
              </button>
              <button
                className="btn btn-2"
                onClick={() =>
                  window.open(
                    'https://sparkly-biscotti-22bb7a.netlify.app',
                    '_blank'
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          <div className="details">
            <div className="article">
              <img src={Blog} alt="Project 1" className="project-img" />
            </div>
            <h2 className="project-title">Blog</h2>
            <div className="btn-container">
              <button
                className="btn btn-1"
                onClick={() =>
                  window.open(
                    'https://github.com/aamirindi/Blog-firebase',
                    '_blank'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-2"
                onClick={() =>
                  window.open(
                    'https://fastidious-lamington-581434.netlify.app',
                    '_blank'
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Projects
