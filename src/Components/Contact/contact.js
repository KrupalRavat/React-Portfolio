import React, { useRef } from "react";
import "./contact.css";
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z2283ba', 'template_dr1ho01', form.current, 'TGISlpwS_i5usy82E')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My CLients</h1>
        <p className="clientDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum
          ipsam ipsum praesentium nulla voluptatum provident et natus obcaecati
          odio facere!
        </p>
        <div className="clientImgs">
            <img src={Walmart} alt="Client" className="clientImg" />
            <img src={Adobe} alt="Client" className="clientImg" />
            <img src={Microsoft} alt="Client" className="clientImg" />
            <img src={Facebook} alt="Client" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id corporis aut est eaque! </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder="Your Name" name='your_name' />
          <input type="email" className="email" placeholder="Your Email" name='your_email' />
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" ></textarea>
          <button type="submit" value='send' className="submitBtn">Submit</button>
          <div className="links">
            <img src={FacebookIcon} alt="facebookIcon" className="link" />
            <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
            <img src={InstagramIcon} alt="InstagramIcon" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
