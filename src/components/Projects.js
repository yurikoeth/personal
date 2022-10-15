import React, {useEffect, useState} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"
import killsboro from './assets/killsboro.png'
import killsborobw from './assets/killsborobw.png'
import yurikotracker from './assets/yurikotracker.png'
import yurikotrackerbw from './assets/yurikotrackerbw.png'

const About = () => {

    //Controls whether the image has color or not.//
    const [color, setColor,] = useState(false)
    const showColor = () => {
        setColor(!color)
    }

    const [color2, setColor2,] = useState(false)
    const showColor2 = () => {
        setColor2(!color2)
    }

    //Controls scroll animations 
    useEffect(() => {
        Aos.init({duration: 2000});
        }, []);


    const style = {
        container: 'bg-black w-full h-fit text-white p-4 flex pt-8 ',
        content: 'w-full lg:w-3/4 lg:m-auto flex flex-col justify-between space-y-8 h-fit',
        titleContainer: "m-auto text-center ",
        title: "text-4xl",
        projectContainer: "flex flex-col space-y-4 pb-12",
        image: "rounded-md pb-2"
    }

  return (
    <div id="About" className={style.container}>
        <div data-aos="fade-up" className={style.content}>
          <div className={style.titleContainer}>
            <h1 className={style.title}><u>Projects</u></h1>
          </div>
          <div className={style.projectContainer} >
                <div onMouseEnter={showColor} onMouseLeave={showColor}>
                {
                    color ? 
                        (<a href="https://crafthousesi.netlify.app/" target="_blank" rel="noreferrer">
                            <img className={style.image} src={killsboro} alt="crafthouse webpage (color)"></img>
                        </a>)
                        :
                        (<a href="https://crafthousesi.netlify.app/" target="_blank" rel="noreferrer">
                            <img className={style.image} src={killsborobw} alt="crafthouse webpage (bw)"></img>
                        </a>)
                }   
                </div>
                <p>Using <u><b>ReactJS</b></u> and <u><b>TailwindCSS</b></u>, I built a website for a local restaurant. Using various different techniques such as
                    <u><i>useState</i></u> to create <u><i>mobile responsiveness</i></u>. Such as <u><i>dynamic sizing, and hamburger menuing</i></u>. Featuring links to their external
                    profiles such as GrubHub and Facebook, we allow the user a "one stop shop" to find information and place orders for this business.
                </p>
          </div>
          <div className={style.projectContainer}>
          <div onMouseEnter={showColor2} onMouseLeave={showColor2}>
                {
                    color2 ? 
                        (<a href="https://yurikotracker.netlify.app/" target="_blank" rel="noreferrer">
                        <img className={style.image} src={yurikotracker} alt="yurikotracker webpage (color)"></img>
                    </a>)
                        :
                        (<a href="https://yurikotracker.netlify.app/" target="_blank" rel="noreferrer">
                        <img className={style.image} src={yurikotrackerbw} alt="yurikotracker webpage (bw)"></img>
                    </a>)
                }   
                </div>
                <p>Using <u><b>ReactJS</b></u> and <u><b>TailwindCSS</b></u>, I built a website to display cryptocurrency market information real-time! Using <u><strong>CoinGecko API</strong></u> I was 
                able to pull real time infomation about various coins. Also featuring a <u><i>filter function</i></u>, I was able to create a <u><i>search function</i></u> to only show certain coins desired by 
                the user. <u><i>Fully mobile and desktop friendly.</i></u>
                </p>
          </div>
        </div>
    </div>
  )
}

export default About