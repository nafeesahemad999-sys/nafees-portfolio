import React, { useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../../data/resumeData';
import './Contact.css';


const EMAILJS_SERVICE_ID  = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState('idle'); // idle | sending | ok | err

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formRef.current;

    if (!name.value || !email.value || !subject.value || !message.value) {
      setStatus('err'); return;
    }

    setStatus('sending');

    try {
      //  ── Real EmailJS send (uncomment once you add your IDs above) ──
      const emailjs = (await import('@emailjs/browser')).default;
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      

      // Simulated success (remove this line when EmailJS is wired up):
      // await new Promise(r => setTimeout(r, 800));

      setStatus('ok');
      formRef.current.reset();
    } catch (err) {
      setStatus('err');
    }
  };

  return (
    <section id="contact">
      <div className="section-wrapper">
        <div className="reveal">
          <div className="section-title">Contact</div>
          <div className="section-sub"> GET IN TOUCH</div>
        </div>

        <div className="contact-grid reveal">

          {/* ── Info panel ── */}
          <div>
            <div className="glass-card contact-info-card">
              <p>I'm actively looking for entry-level developer roles. Let's build something great together!</p>
              <div className="contact-detail"><FiMail className="c-icon" /><span>{personalInfo.email}</span></div>
              <div className="contact-detail"><FiPhone className="c-icon" /><span>{personalInfo.phone}</span></div>
              <div className="contact-detail"><FiMapPin className="c-icon" /><span>{personalInfo.location}</span></div>
            </div>
            <div className="social-row-contact">
              <a href={`mailto:${personalInfo.email}`}><FiMail /></a>
              <a href={personalInfo.github}   target="_blank" rel="noreferrer"><FiGithub /></a>
              <a href={personalInfo.linkedin} target="_blank" rel="noreferrer"><FiLinkedin /></a>
            </div>
          </div>

          {/* ── Form ── */}
          <div className="glass-card">
            <form ref={formRef} onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label> Name</label>
                <input name="name"    type="text"  placeholder="Your name"        />
              </div>
              <div className="form-group">
                <label> Email</label>
                <input name="email"   type="email" placeholder="your@email.com"   />
              </div>
              <div className="form-group">
                <label> Subject</label>
                <input name="subject" type="text"  placeholder="Subject"          />
              </div>
              <div className="form-group">
                <label> Message</label>
                <textarea name="message" placeholder="Your message..." rows={5} />
              </div>

              <button className="send-btn" type="submit" disabled={status === 'sending'}>
                {status === 'sending' ? '> SENDING...' : '> SEND_MESSAGE'}
              </button>

              {status === 'ok'  && <p className="msg msg-ok">✓ Message sent! I'll respond shortly.</p>}
              {status === 'err' && <p className="msg msg-err">✗ Please fill all fields correctly.</p>}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;
