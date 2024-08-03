import { useEffect, useState } from 'react'
import {
  faCss3,
  faGithub,
  faJsSquare,
  faJava,
  faReact,
  faAngular,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p className="para">
            Hello there! I'm delighted to welcome you to my portfolio. I have
            completed my Bachelor's degree in Artificial Intelligence and Data
            Science in June 2024. With a strong inclination towards technology
            and problem-solving, I have developed a keen interest in both the
            technical and creative aspects of software development. I have a
            deep understanding of Java, Spring, Spring Boot, and Full Stack
            development.
          </p>
          <p align="LEFT" className="para">
            One of my core skills lies in front-end development, where I enjoy
            crafting intuitive and visually appealing user interfaces. I take
            pride in creating seamless user experiences by combining my
            technical expertise with a keen eye for design and usability.
          </p>
          <p align="LEFT" className="para">
            Beyond my academic pursuits and technical endeavors, I have a wide
            range of hobbies that keep me energized and balanced. I find joy in
            engaging in Calisthenics, a form of exercise that pushes my physical
            limits and keeps me motivated to stay fit and healthy.
          </p>
        </div>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJava} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAngular} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGithub} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
