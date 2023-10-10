import Link from 'next/link'
import React from 'react'

function Button(props) {

    if(props.link) {
        return (
            <Link href={props.link}>
                <span className='text-cyan-500 flex gap-2 items-center'>{props.children}</span>
            </Link>
        )
    }

  return (
    <button onClick={props.onClick} className='bg-cyan-100 text-sm text-cyan-700 font-bold py-1 px-2 rounded-md'>{props.children}</button>
  )
}

export default Button
