import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import RedBank from '../../assets/images/redbanks.jpg'
import Blog from '../../assets/images/Blogs.jpg'
import Music from '../../assets/images/react-music-player.png'
import Todos from '../../assets/images/todos.png'
import Caclu from '../../assets/images/calcu.jpeg'

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
          {/* RedBank */}
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
                  window.open('https://redbank-aamir.vercel.app', '_blank')
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Blog */}
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
                    'https://blog-firebase-aamir.vercel.app',
                    '_blank'
                  )
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Music PWA */}
          <div className="details">
            <div className="article">
              <img src={Music} alt="Project 1" className="project-img" />
            </div>
            <h2 className="project-title">(PWA) Music Player</h2>
            <div className="btn-container">
              <button
                className="btn btn-1"
                onClick={() =>
                  window.open(
                    'https://github.com/aamirindi/react-music',
                    '_blank'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-2"
                onClick={() =>
                  window.open('https://react-music-aamir.vercel.app', '_blank')
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Todos */}
          <div className="details">
            <div className="article">
              <img src={Todos} alt="Project 1" className="project-img" />
            </div>
            <h2 className="project-title">Todos</h2>
            <div className="btn-container">
              <button
                className="btn btn-1"
                onClick={() =>
                  window.open(
                    'https://github.com/aamirindi/Angular-basics/tree/main/todo-list',
                    '_blank'
                  )
                }
              >
                Github
              </button>
              <button
                className="btn btn-2"
                onClick={() =>
                  window.open('https://todo-list-aamir.vercel.app', '_blank')
                }
              >
                Live Demo
              </button>
            </div>
          </div>
          {/* Calculator */}
          <div className="details">
            <div className="article">
              <img src={Caclu} alt="Project 1" className="project-img" />
            </div>
            <h2 className="project-title">Calculator TS</h2>
            <div className="btn-container">
              <button
                className="btn btn-1"
                onClick={() =>
                  window.open(
                    'https://github.com/aamirindi/calculator?tab=readme-ov-file',
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
                    'https://calculator-aamirindi.vercel.app',
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
