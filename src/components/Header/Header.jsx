import React from 'react'
import { Head } from './style.jsx'
import { BsCalendar2Check } from 'react-icons/bs'

const Header = () => {
  return (
    <Head>
        To<div>.</div>Do List <div className='checkMark'><BsCalendar2Check/></div>
    </Head>
  )
}

export default Header