import React from 'react'
import { Head } from './style.jsx'
import { FaClipboardList } from 'react-icons/fa'

const Header = () => {
  return (
    <Head>
        To<div>.</div>Do List <div className='checkMark'><FaClipboardList/></div>
    </Head>
  )
}

export default Header