import { useContext } from "react";
import classes from "./main-footer.module.css";
import { useRef } from "react";
import ThemeContext from "../../store/theme-context";
import NotificationContext from "../../store/notification-context";

function MainFooter() {
  const emailInputRef = useRef();
  const themeCtx = useContext(ThemeContext);
  const notificationCtx = useContext(NotificationContext);

  const registrationHandle = (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    notificationCtx.showNotification({
      title: "Please wait !",
      message: "The action is loading.",
      status: "pending",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => {
      notificationCtx.showNotification({
        title: "Success !",
        message: "The Email address send successfully.",
        status: "success",
      });
    });
  };

  return (
    <div
      className={
        themeCtx.theme === "DARK" ? classes.darkFooter : classes.lightFooter
      }
    >
      <h3 className={classes.titleNewsletter}>
        Interesting Stories | Updates | Guides
      </h3>
      <p className={classes.describe}>
        Subscribe to learn about new technology and updated. join over 5000+
        members community to stay up to date with latest news.
      </p>
      <form className={classes.form} onSubmit={registrationHandle}>
        <input
          className={classes.input}
          type="email"
          id="email"
          placeholder="Enter your Email"
          ref={emailInputRef}
        />
        <button className={classes.btn}>Suscribe</button>
      </form>
      <div className={classes.bottom}>
        <span>&copy;2023 Rodrigue KOUETE, All rights reserved.</span>
      </div>
    </div>
  );
}

export default MainFooter;
