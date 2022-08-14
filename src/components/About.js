import React, {useEffect, useState} from 'react'
import selfie from './assets/selfie.png'
import selfieColor from './assets/selfieColor.png'
import Aos from 'aos'
import "aos/dist/aos.css"

const About = () => {
    //Controls whether the image has color or not.//
    const [color, setColor] = useState(false)
    const showColor = () => {
        setColor(!color)
    }

    //Controls scroll animations 
    useEffect(() => {
        Aos.init({duration: 2000});
        }, []);


    const style = {
        container: 'bg-black w-full h-fit md:h-screen text-white p-8 pt-5 flex ',
        content: 'lg:w-3/4 lg:m-auto flex flex-col md:flex-row justify-between md:space-x-4 lg:space-x-0 pt-24 md:pt-20 ',
        textbox:'md:w-1/2',
        heading: 'text-3xl underline',
        passages: 'space-y-4 mt-6 bg-zinc-900 p-6 rounded-md',
        selfie: 'mt-8 md:mt-0 md:h-96 md:w-96 rounded-md',
        lists: 'mt-8 w-3/5 m-auto flex justify-between',
        list: 'space-y-1 list-disc',
        selfieContainer: 'mt-6'
    }

  return (
    <div id="About" className={style.container}>
        <div data-aos="fade-up" className={style.content}>
            <div className={style.textbox}>
                <div className={style.passages}>
                    <h2 className={style.heading}>Welcome</h2>
                        <p>My name is <i>Sean Mangin</i>, I am a <u>Fullstack Developer</u>. Prioritizing modern web programming languages, I work with businesses of all sizes and 
                        natures. Helping by bringing them online with fast, modern websites, featuring sleek designs. 
                        <br></br>
                        <br></br>
                        Whether building independently for local start ups, or individual clients, I enjoy helping pave the way we see and use the internet.
                        <br></br>
                        <br></br>
                        These are the languages and stacks that I have utilized so far:
                        </p>
                        <div className={style.lists}>
                        <ul className={style.list}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                        </ul>
                        <ul className={style.list}>
                            <li>TailwindCSS</li>
                            <li>ReactJS</li>
                            <li>Wordpress</li>
                        </ul>
                        </div>
                </div>
            </div>
           <div className={style.selfieContainer}onMouseEnter={showColor} onMouseLeave={showColor}>
               {
                    color ? 
                    (<img src={selfieColor} className={style.selfie} alt="Sean M. (in color)"></img>)
                    :
                    (<img src={selfie} className={style.selfie}  alt="Sean M. (in BW)"></img>)
                }
           </div>
        </div>
    </div>
  )
}

export default About