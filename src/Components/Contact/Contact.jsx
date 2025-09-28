import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import ReCAPTCHA from "react-google-recaptcha";
import "./Contact.css";
import mail from "../../assets/mail.svg";
import call from "../../assets/call.svg";
import location from "../../assets/location.svg";

const Contact = () => {
  const [showMsg, setShowMsg] = useState("");
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.delete("g-recaptcha-response");
    formData.append("access_key", "2baad129-39cc-4c60-8a5b-98919d398a47");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      // clear inputs
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      setShowMsg(res.message);
    }
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div id='contact' className="section">
      <h1>Get in touch</h1>
      <div className="article">
        <div className="left-article">
          <h2>Let's talk</h2>
          <p>
            I'm currently avaliable to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <ul>
            <li>
              <img src={mail} alt="" /> <span>danishwebindia@gmail.com</span>
            </li>
            <li>
              <img src={call} alt="" /> <span>+91-9368269020</span>
            </li>
            <li>
              <img src={location} alt="" /> <span>Delhi India</span>
            </li>
          </ul>
        </div>
        <div className="right-article">
          <form className="form" onSubmit={onSubmit}>
            <div className="notification">{showMsg}</div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              required
              name="name"
              ref={nameRef}
              placeholder="Enter your name"
            />
            <label htmlFor="email">Your Email</label>
            <input
              type="text"
              required
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
            />
            <label htmlFor="message">Write your message here</label>
            <textarea
              required
              name="message"
              ref={messageRef}
              placeholder="Enter your message"
            ></textarea>
            <ReCAPTCHA sitekey="6LdMENcrAAAAAKg6L1XM_3E3Jnqf9X4Cstj7bHBg" onChange={onChange} />
            <motion.button whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }} type="submit">Submit now</motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
