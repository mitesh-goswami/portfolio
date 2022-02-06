import React, { useContext, useRef, useState } from 'react';
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import emailjs from "emailjs-com"
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs
        .sendForm(
          "service_5198cpb",
          "template_260dnwh",
          formRef.current,
          "user_HSCiDeDH5PzEBQ1A9TdAn"
        )
        .then(
          (result) => {
            console.log(result.text);
            setDone(true)
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  return <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
              <h1 className="c-title">Let's discuss your project</h1>
              <div className="c-info">
                  <div className="c-info-item">
                      <img 
                      src={Phone}
                      alt=""
                      className='c-icon'
                      />
                      +91 8735952210
                  </div>
                  <div className="c-info-item">
                      <img 
                      src={Email}
                      alt=""
                      className='c-icon'
                      />
                      codemastermitesh@gmail.com
                  </div>
              </div>
          </div>
          <div className="c-right">
          <p className="c-desc">
            <b>What’s your story?</b> Get in touch. If you wanna ask something
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name"/>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject"/>
              <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email"/>
              <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder='Message' name="message"/>
              <button>Submit</button>
              {done&&"Thank you!"}
          </form>
          </div>
      </div>
  </div>;
};

export default Contact;
