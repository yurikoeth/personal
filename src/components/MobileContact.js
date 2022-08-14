import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css"

const Contact = () => {
  
  //Controls scroll animations 
  useEffect(() => {
    Aos.init({duration: 2000});
    }, []);

    const style = {
        container: 'lg:hidden bg-zinc-900 h-fit text-white',
        flexbox: 'flex flex-col h-fit justify-between w-3/4 m-auto pt-10',
        formContainer: 'bg-black p-6 rounded-md mt-12  w-full h-fit',
        textContainer: 'h-full m-auto',
        letsChat: 'text-6xl tracking-wide mt-2 text-center',
        textbox: 'm-auto mt-4 text-lg w-4/5',
        form: 'flex-col space-y-12 w-fit pt-2', 
        fieldset: 'flex flex-col justify-between ',
        label: 'text-lg',
        textInput: 'bg-zinc-800 w-full h-9 mt-2',
        textArea: 'bg-zinc-800 w-full mt-2',
        button: 'bg-zinc-800 shadow-xl hover:bg-zinc-500 text-white font-bold rounded-full p-4 w-36 items-center',
        }
        
  return (
    <div className={style.container}>
        <div data-aos="flip-up" className={style.flexbox}>
          <div className={style.textContainer}>
            <h1 className={style.letsChat}>Let's Chat!</h1>
            <div className={style.textbox}>
            <p>I am currently looking for any new opportunities, and my inbox is always open. </p>
            </div>
          </div>
          <div className={style.formContainer}>
            <form 
              action="mailto:mangindev@gmail.com" 
              className={style.form}
              method="POST"
              enctype="multipart/form-data"
              name="EmailForm"
            >
              <fieldset className={style.fieldset}>
                <label className={style.label} for="name">Name *</label>
                <input id="name" type="text" required className={style.textInput}></input>
              </fieldset>
              <fieldset className={style.fieldset}>
                <label className={style.label} for="name">Email *</label>
                <input id="name" type="email" required className={style.textInput}></input>
              </fieldset>
              <fieldset className={style.fieldset}>
                <label className={style.label} for="name">Subject</label>
                <input id="name" type="text" className={style.textInput}></input>
              </fieldset>
              <fieldset className={style.fieldset}>
                <label className={style.label} for="name">Message *</label>
                <textarea id="name" type="textarea" rows="4" cols="50" required className={style.textArea}></textarea>
              </fieldset>
              <button className={style.button} id="button" value="submit" type="submit">Submit</button>
            </form>
          </div>
    </div>
  </div>
  )
}

export default Contact