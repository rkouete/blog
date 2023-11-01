import classes from "./notification.module.css";
import ThemeContext from "../../store/theme-context";
import NotificationContext from "../../store/notification-context";
import { useContext } from "react";
import XCercleIcon from "../icon/x-cercle-icon";
import ArrowPathIcon from "../icon/arrow-path-icon";
import CheckBadgeIcon from "../icon/check-badge-icon";

function Notification(props) {
    const themeCtx = useContext(ThemeContext);
    const notificationCtx = useContext(NotificationContext)
    const { title, message, status } = props;
    let statusClass = '';
    let icon = ''

    if(status === 'success') {
        statusClass = classes.success;
        icon = <CheckBadgeIcon />
    } else if(status === 'error') {
        statusClass = classes.error;
        icon = <XCercleIcon />
    } else if(status === 'pending') {
        statusClass = classes.pending;
        icon = <ArrowPathIcon />
    }

    const activeClasses = `${classes.notification}`
    
  return (
    <div className={themeCtx.theme === 'DARK' ? classes.darkNotification : classes.lightNotification}>
      <span className={statusClass}>{icon}</span>
      <div>
        <h2>{title}</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default Notification
