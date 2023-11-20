import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/DUPONTYASMINE.pdf'
import {HiDownload} from 'react-icons/hi'
import './abouut.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="" />
                </div>
            </div>
            <div className="about__right">
                <h2>À propos de moi</h2>
                <div className="about__cards">
                   
                </div>
                <p>
                Je suis passionné par le développement web. Bien que je n'aie pas encore d'expérience professionnelle dans le domaine, je suis déterminé à acquérir les compétences nécessaires pour exceller en tant que développeur web.
                Au cours de mes études, j'ai développé une solide compréhension des concepts fondamentaux de la programmation et des langages tels que HTML, CSS et JavaScript.
                Je suis actuellement à la recherche d'opportunités pour mettre en pratique mes compétences et acquérir une expérience concrète en tant que développeur web. Mon objectif est de contribuer de manière significative à des projets stimulants et de continuer à élargir mes compétences dans le domaine.
                </p>
                <p>
                Consultez mon CV ci-dessous !!
                </p>
                <a href={CV} download className='btn primary'>Telecharger CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About