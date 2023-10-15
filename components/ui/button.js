import Link from 'next/link'
import React from 'react'
import classes from './button.module.css';

function Button(props) {

    if(props.link) {
        return (
            <Link className={classes.link} href={props.link}>
                {props.children}
            </Link>
        )
    }

  return (
    <button onClick={props.onClick} className={classes.btn}>{props.children}</button>
  )
}

export default Button
