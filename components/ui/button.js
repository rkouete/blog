import Link from 'next/link'
import React from 'react'
import classes from './button.module.css';

function Button(props) {

    if(props.link) {
        return (
            <Link href={props.link}>
                <span className={classes.link}>{props.children}</span>
            </Link>
        )
    }

  return (
    <button onClick={props.onClick} className={classes.btn}>{props.children}</button>
  )
}

export default Button
