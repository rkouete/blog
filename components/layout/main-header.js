import Link from 'next/link'
import React, { Fragment } from 'react'
import HomeIcon from '../icon/home-icon'
import BlogIcon from '../icon/blog-icon'

function MainHeader() {
  return (
    <Fragment>
        <header className='w-[100%] h-16 bg-white shadow-md flex fixed top-0 justify-between items-center px-10'>
            <div className='text-2xl font-bold'>
                <Link href='/'>Blog website</Link>
            </div>
            <nav>
                <ul className='flex gap-4 text-md font-semibold'>
                    <li>
                        <Link href="/" className='flex gap-1 items-center'><HomeIcon /><span>Home</span></Link>
                    </li>
                    <li>
                        <Link href="/blog" className='flex gap-1 items-center'><BlogIcon /><span>Blog</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    </Fragment>
  )
}

export default MainHeader
