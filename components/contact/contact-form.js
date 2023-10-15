import { useState } from 'react';
import classes from './contact-form.module.css';


function ContactForm() {
    const [ entryEmail, setEntryEmail ] = useState('');
    const [ entryName, setEntryName ] = useState('');
    const [ entryMessage, setEntryMessage ] = useState('');

    const sendMessageHandle = () => {

    }

  return (
    <section className={classes.contact}>
        <h1>How can i help you ?</h1>
        <form className={classes.form} onSubmit={sendMessageHandle}>
            <div className={classes.controls}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' id='email' required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='name'>Your Name</label>
                    <input type='text' id='name' required/>
                </div>
                <div className={classes.control}>
                    <label htmlFor='message'>Your Message</label>
                    <textarea rows={5} id='message' required/>
                </div>
                <div className={classes.actions}>
                    <button>Send Message</button>
                </div>
            </div>
        </form>
    </section>
  )
}

export default ContactForm
