import Head from 'next/head';
import { Fragment } from 'react';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>KOUETE's Blog</title>
        <meta name='description' content='I post about programming and web development.'/>
      </Head>
      <h1>Home Page</h1>
    </Fragment>
  );
}
