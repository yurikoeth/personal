import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'


const Hero = () => {
    const styles = {
        heroWallpaper:'bg-hero-image  bg-center bg-cover h-screen text-white',
        flexbox: 'h-screen flex flex-col w-full bg-black/70',
        contentContainer: 'h-1/3 md:h-1/4 w-2/3 mr-auto ml-auto mt-56 md:mt-72 text-center',
        textbox: 'h-fit flex flex-col content-center',
        hello: 'text-xl md:text-2xl text-red-500 tracking-wider',
        name: 'text-5xl md:text-8xl mt-1 md:mt-0',
        title: 'mt-2 md:mt-2 tracking-wide md:text-xl',
        button: 'border-2 border-gray-600 rounded-lg px-3 py-3 text-white cursor-pointer hover:bg-zinc-900 hover:text-gray-200 w-2/3 md:w-1/3 m-auto tracking-wide mt-4',
        iconsContainer: 'w-1/3 ml-auto mr-auto mt-44 flex justify-between ',
        icons: 'h-8 hover:h-10'

    }
  return (
    <div className={styles.heroWallpaper}>
      <div className={styles.flexbox}>
        <div className={styles.contentContainer}>
          <div className={styles.textbox}>
            <h2 className={styles.hello}>Hello, World.</h2> 
            <h1 className={styles.name}>I'm Sean Mangin</h1>
            <h3 className={styles.title}>Web Developer</h3>
          </div>
          <a href="#About">
            <div class={styles.button}>
              Learn More
            </div>
          </a>
        </div>
        <div className={styles.iconsContainer}>
          <a href="https://twitter.com/yuriko_eth" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className={styles.icons} icon={faTwitter}/></a>
          <a href="https://github.com/yurikoeth" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className={styles.icons} icon={faGithub}/></a>
          <a href="https://www.linkedin.com/in/sean-mangin-915203b5/" rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className={styles.icons} icon={faLinkedin}/></a>
        </div>
      </div>      
    </div>
  )
}

export default Hero