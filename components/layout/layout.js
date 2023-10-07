import React, { Fragment } from 'react'
import MainHeader from './main-header'

function Layout(props) {
  return (
    <Fragment>
        <MainHeader />
        <main className='my-20'>{props.children}</main>
    </Fragment>
  )
}

export default Layout
