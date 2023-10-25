import classes from './main-footer.module.css';
import { useRef } from 'react';

function MainFooter() {
  const emailInputRef = useRef();

  const registrationHandle = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    fetch('/api/newsletter', {
      method: 'POST',
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      console.log(response.message)
    })
  }

  return (
    <div className={classes.footer}>
      <h5>© 2023 Kevin, Inc.</h5>
      <div className={classes.newsletter}>
        <h2>Newsletter</h2>
        <form className={classes.form} onSubmit={registrationHandle}>
        <input 
          className={classes.input} 
          type='email' 
          id='email' 
          placeholder='Email'
          ref={emailInputRef}
        />
        <button className={classes.btn}>Suscribe</button>
        </form>
      </div>
    </div>
  )
}

export default MainFooter
