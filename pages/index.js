import Head from 'next/head';
import { Fragment } from 'react';
import NotificationContext from '../store/notification-context';
import Notification from '../components/ui/notification';
import { useContext } from 'react';

export default function Home() {
  const notificationCtx = useContext(NotificationContext);

  const activeNotification = notificationCtx.notification

  return (
    <Fragment>
      <Head>
        <title>KOUETE's Blog</title>
        <meta name='description' content='I post about programming and web development.'/>
      </Head>
      <h1>Home Page</h1>
      { activeNotification && <Notification title={activeNotification.title} message={activeNotification.message} status={activeNotification.status}/> }
    </Fragment>
  );
}
