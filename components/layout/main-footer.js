import { useContext } from 'react';
import classes from './main-footer.module.css';
import { useRef } from 'react';
import ThemeContext from '../../store/theme-context';

function MainFooter() {
  const emailInputRef = useRef();
  const themeCtx = useContext(ThemeContext);

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
    <div className={themeCtx.theme === 'DARK' ? classes.darkFooter : classes.lightFooter}>
      <h3 className={classes.titleNewsletter}>Interesting Stories | Updates | Guides</h3>
      <p className={classes.describe}>
        Subscribe to learn about new technology and updated. join over 5000+ 
        members community to stay up to date with latest news.
      </p>
      <form className={classes.form} onSubmit={registrationHandle}>
        <input
          className={classes.input}
          type='email'
          id='email'
          placeholder='Enter your Email'
          ref={emailInputRef}
        />
        <button className={classes.btn}>Suscribe</button>
      </form>
      <div className={classes.bottom}>
        <span>&copy;2023 Kevin, All rights reserved.</span>
        <div>Made in &hearts; by <a href='#'>Kevin</a></div>
      </div>
    </div>
  )
}

export default MainFooter
