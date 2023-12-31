import { useEffect } from "react";
import { useState, createContext } from "react";

const NotificationContext =  createContext({
    notification: null,
    showNotification: () => {},
    hideNotification: () => {}
});

export function NotificationContextProvider(props) {
    const [ activeNotification, setActiveNotification ] = useState(false);

    useEffect(() => {
        if(activeNotification && 
            (activeNotification.status === 'success' || 
            activeNotification.status === 'error'
        )) {
            const timer = setTimeout(() => {
                setActiveNotification(null);
            }, 3000);

            return () => {
                clearTimeout(timer)
            }
        }
    }, [activeNotification])

    const showNotificationHandle = (notificationData) => {
        setActiveNotification(notificationData)
    }

    const hideNotificationHandle = () => {
        setActiveNotification(null)
    }

    const context = {
        notification: activeNotification,
        showNotification: showNotificationHandle,
        hideNotification: hideNotificationHandle,
    }

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext;

